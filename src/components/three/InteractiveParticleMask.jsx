import { useEffect, useRef, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─────────────────────────────────────────────
   Helper: sample visible pixels from a mask PNG
   ───────────────────────────────────────────── */
function sampleMaskPixels(image, maxParticles, scale = 1) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  // Higher sampling resolution = denser, fuller silhouette
  const sampleW = 850;
  const ratio = image.height / image.width;
  const sampleH = Math.round(sampleW * ratio);

  canvas.width = sampleW;
  canvas.height = sampleH;
  ctx.drawImage(image, 0, 0, sampleW, sampleH);

  const imageData = ctx.getImageData(0, 0, sampleW, sampleH);
  const { data } = imageData;

  const visiblePixels = [];

  for (let y = 0; y < sampleH; y++) {
    for (let x = 0; x < sampleW; x++) {
      const idx = (y * sampleW + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      // Looser threshold = more usable pixels = denser fill
      if (a > 20 && r + g + b > 40) {
        visiblePixels.push([x, y]);
      }
    }
  }

  const count = Math.min(maxParticles, visiblePixels.length);
  const positions = new Float32Array(count * 3);

  const halfW = sampleW / 2;
  const halfH = sampleH / 2;
  const pxScale = scale / sampleW;

  // Shuffle visible pixels so we get a random but full distribution
  for (let i = visiblePixels.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [visiblePixels[i], visiblePixels[j]] = [visiblePixels[j], visiblePixels[i]];
  }

  for (let i = 0; i < count; i++) {
    const [px, py] = visiblePixels[i];
    positions[i * 3] = (px - halfW) * pxScale;
    positions[i * 3 + 1] = -(py - halfH) * pxScale;
    // Flatter Z spread so the shape reads denser
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.012 * scale;
  }

  return { positions, count };
}

/* ─────────────────────────────────────────────
   Particles
   ───────────────────────────────────────────── */
const Particles = ({
  maskSrc,
  particleCount = 12000,
  particleColor = '#d4a843',
  strength = 1.35,
  scale = 11.5,
}) => {
  const pointsRef = useRef();
  const pointerRef = useRef(new THREE.Vector2(9999, 9999));
  const [ready, setReady] = useState(false);

  const dataRef = useRef({
    positions: null,
    originals: null,
    count: 0,
  });

  const { size, viewport, gl } = useThree();
  const isMobile = size.width < 768;
  const adjustedCount = isMobile ? Math.min(particleCount, 4000) : particleCount;

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const { positions, count } = sampleMaskPixels(img, adjustedCount, scale);
      dataRef.current.positions = positions;
      dataRef.current.originals = new Float32Array(positions);
      dataRef.current.count = count;
      setReady(true);
    };

    img.src = maskSrc;
  }, [maskSrc, adjustedCount, scale]);

  const onPointerMove = useCallback(
    (e) => {
      const rect = gl.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      pointerRef.current.x = x * (viewport.width / 2);
      pointerRef.current.y = y * (viewport.height / 2);
    },
    [gl, viewport]
  );

  const onPointerLeave = useCallback(() => {
    pointerRef.current.set(9999, 9999);
  }, []);

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);

    return () => {
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [gl, onPointerMove, onPointerLeave]);

  useFrame((state) => {
    if (!pointsRef.current || !dataRef.current.originals) return;

    const posAttr = pointsRef.current.geometry.attributes.position;
    const arr = posAttr.array;
    const orig = dataRef.current.originals;
    const count = dataRef.current.count;
    const time = state.clock.getElapsedTime();

    const mx = pointerRef.current.x;
    const my = pointerRef.current.y;
    const repulsionRadius = (isMobile ? 1.8 : 2.5) * strength;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const ox = orig[i3];
      const oy = orig[i3 + 1];
      const oz = orig[i3 + 2];

      const dx = ox - mx;
      const dy = oy - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let targetX = ox;
      let targetY = oy;
      let targetZ = oz;

      if (dist < repulsionRadius && dist > 0.001) {
        const force = Math.pow((repulsionRadius - dist) / repulsionRadius, 2) * 0.78;
        const pushStrength = isMobile ? 0.65 : 1.08;

        const angle = Math.atan2(dy, dx);
        const swirlStrength = 0.42;

        const curveX = Math.cos(angle + swirlStrength) * 0.35;
        const curveY = Math.sin(angle + swirlStrength) * 0.35;

        targetX =
          ox + ((dx / dist) + curveX) * force * pushStrength * strength;

        targetY =
          oy + ((dy / dist) + curveY) * force * pushStrength * strength;

        targetZ = oz + force * 0.95 * strength;
      }

      // Softer wobble applied inside the target, not added endlessly every frame
      const cluster = i % 14;
      const drift = Math.sin(time * 0.45 + cluster * 0.35) * 0.02;

      const wobbleX =
        Math.sin(time * 1.05 + cluster * 0.4 + oy * 0.18) * 0.010 + drift * 0.35;

      const wobbleY =
        Math.cos(time * 0.92 + cluster * 0.32 + ox * 0.18) * 0.010;

      arr[i3] += ((targetX + wobbleX) - arr[i3]) * 0.065;
      arr[i3 + 1] += ((targetY + wobbleY) - arr[i3 + 1]) * 0.065;
      arr[i3 + 2] += (targetZ - arr[i3 + 2]) * 0.06;
    }

    posAttr.needsUpdate = true;
  });

  if (!ready) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={dataRef.current.count}
          array={dataRef.current.positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={isMobile ? 0.065 : 0.07}
        color={particleColor}
        transparent
        opacity={0.95}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

/* ─────────────────────────────────────────────
   Public wrapper
   ───────────────────────────────────────────── */
const InteractiveParticleMask = ({
  maskSrc,
  particleCount = 12000,
  particleColor = '#dbb454',
  strength = 1.2,
  scale = 10,
  className = '',
}) => {
  return (
    <div className={`particle-mask-canvas w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Particles
          maskSrc={maskSrc}
          particleCount={particleCount}
          particleColor={particleColor}
          strength={strength}
          scale={scale}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveParticleMask;
