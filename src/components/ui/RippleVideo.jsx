import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D tDiffuse;
  uniform vec2 uMouse;
  uniform float uRipples;
  uniform float uStrength;
  uniform float uFrequency;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    float dist = distance(uv, uMouse);
    float ripple = sin(dist * uFrequency - uRipples) * uStrength * exp(-dist * 5.0);
    uv += normalize(uv - uMouse) * ripple;
    gl_FragColor = texture2D(tDiffuse, uv);
  }
`;

const RipplePlane = ({ videoSrc }) => {
  const meshRef = useRef();
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  
  const video = useMemo(() => {
    const v = document.createElement('video');
    v.src = videoSrc;
    v.crossOrigin = 'Anonymous';
    v.loop = true;
    v.muted = true;
    v.play();
    return v;
  }, [videoSrc]);

  const texture = useMemo(() => new THREE.VideoTexture(video), [video]);

  const uniforms = useMemo(() => ({
    tDiffuse: { value: texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uRipples: { value: 0 },
    uStrength: { value: 0 },
    uFrequency: { value: 20 },
  }), [texture]);

  useFrame((state) => {
    mouse.current.lerp(targetMouse.current, 0.1);
    meshRef.current.material.uniforms.uMouse.value.copy(mouse.current);
    meshRef.current.material.uniforms.uRipples.value += 0.05;
    
    // Decelerate strength
    meshRef.current.material.uniforms.uStrength.value *= 0.95;
  });

  const handlePointerMove = (e) => {
    targetMouse.current.set(e.uv.x, e.uv.y);
    meshRef.current.material.uniforms.uStrength.value = 0.015; // Subtle strength
  };

  return (
    <mesh ref={meshRef} onPointerMove={handlePointerMove}>
      <planeGeometry args={[16, 9]} />
      <shaderMaterial 
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

const RippleVideo = ({ src, className }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <RipplePlane videoSrc={src} />
      </Canvas>
    </div>
  );
};

export default RippleVideo;
