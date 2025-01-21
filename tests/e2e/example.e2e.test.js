const puppeteer = require('puppeteer');

describe('E2E Test', () => {
  it('should display the home page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const title = await page.title();
    expect(title).toBe('Aurea Nexus');
    await browser.close();
  });
});
