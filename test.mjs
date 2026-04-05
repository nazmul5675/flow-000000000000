import puppeteer from 'puppeteer';

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => {
      console.log('PAGE ERROR CAPTURED:');
      console.log(error.message);
    });
    
    await page.goto('http://localhost:5173', {waitUntil: 'networkidle0', timeout: 10000});
    await browser.close();
  } catch (err) {
    console.error('Puppeteer err:', err);
  }
})();
