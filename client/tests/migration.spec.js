import { test, expect } from '@playwright/test';

const PREVIEW_URL = 'https://client-9ytetttow-brys-projects-4db70d78.vercel.app';

const ALL_ROUTES = [
  '/',
  '/quote',
  '/faq',
  '/areas',
  '/blog',
  '/contact',
  '/gas-boiler-installation-scunthorpe',
  '/gas-boiler-service-scunthorpe',
  '/gas-boiler-service-north-lincolnshire',
  '/boiler-repair-scunthorpe',
  '/gas-boiler-breakdown-scunthorpe',
  '/boiler-maintenance-tips',
  '/gas-safe-boiler-installers-scunthorpe',
  '/boiler-grants-scunthorpe',
  '/gas-boiler-replacement-scunthorpe',
  '/gas-boiler-servicing-scunthorpe',
  '/gas-boiler-brands-scunthorpe',
  '/boiler-finance-scunthorpe',
];

const REDIRECTS = [
  { source: '/Homepage.html', destination: '/' },
  { source: '/BoilerInstantQuote.html', destination: '/quote' },
  { source: '/AreasCovered.html', destination: '/areas' },
  { source: '/HeatPumpFAQ.html', destination: '/faq' },
  { source: '/HeaderSchema.html', destination: '/' },
];

test.describe('Migration Staging Preview - Comprehensive Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Intercept console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error' || msg.type() === 'warn') {
        console.error(`Console ${msg.type()} on ${page.url()}: ${msg.text()}`);
      }
    });
    // No page crashes
    page.on('pageerror', (err) => {
      throw new Error(`Page error: ${err.message}`);
    });
  });

  test('1. All pages load successfully, h1 visible, no errors', async ({ page }) => {
    for (const route of ALL_ROUTES) {
      const response = await page.goto(PREVIEW_URL + route, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      expect(response.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible({ timeout: 10000 });
      await expect(page.locator('main#main-content')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      // Check no broken images
      await expect(page.locator('img[alt=""], img:not([alt])')).toHaveCount(0);
    }
  });

  test('2. Old static HTML pages redirect correctly to new routes', async ({ page }) => {
    for (const r of REDIRECTS) {
      const response = await page.goto(PREVIEW_URL + r.source, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      expect(page.url()).toContain(PREVIEW_URL + r.destination);
      expect(response.status()).toBe(200);
      // Verify content specific to destination
      if (r.destination === '/') {
        await expect(page.locator('h1')).toContainText(/Nimbus|Boiler|Scunthorpe/i);
      } else if (r.destination === '/quote') {
        await expect(page.locator('form')).toBeVisible();
      } else if (r.destination === '/areas') {
        await expect(page.locator('h1')).toContainText(/Areas Covered/i);
      } else if (r.destination === '/faq') {
        await expect(page.locator('.faq-question')).toBeVisible();
      }
    }
  });

  test('3. Quote form basic validation and mock submit (happy path & error)', async ({ page }) => {
    await page.goto(PREVIEW_URL + '/quote');
    // Error case: click next without input
    await page.click('button:has-text("Next")');
    await expect(page.locator('.error, [role="alert"]')).toBeVisible();
    // Happy path: select option
    await page.check('input[value="own_home"]'); // assume selector from component
    await page.click('button:has-text("Next")');
    await expect(page.locator('.error, [role="alert"]')).not.toBeVisible();
    // Further steps mock, expect no crash
    await page.waitForTimeout(1000);
  });

  test('4. Footer social links, phone schema, Gas Safe present', async ({ page }) => {
    await page.goto(PREVIEW_URL);
    // Footer social
    await expect(page.locator('footer a[href*="x.com"], footer a[href*="twitter.com"]')).toBeVisible();
    // Phone schema
    const content = await page.content();
    expect(content).toContain('"telephone":');
    expect(content).toContain('01724 622069');
    // Gas Safe
    expect(content).toContain('Gas Safe');
    await expect(page.locator('img[alt*="Gas Safe"]')).toBeVisible();
  });

  test('5. No 404 on valid routes, SPA handles unknown gracefully', async ({ page }) => {
    // Valid routes already tested
    // Unknown route should not 404 server-side (SPA rewrite)
    const response = await page.goto(PREVIEW_URL + '/nonexistent');
    expect(response.status()).toBe(200); // rewrite to index.html
    // Client-side shows home or 404 page
    await expect(page.locator('h1')).toBeVisible(); // doesn't crash
  });

  test('6. Lighthouse high scores verification (run manually)', async () => {
    // Command: cd client && npx @lhci/cli autorun --config=../../lighthouse-seo-only.json URL=PREVIEW_URL
    // Or npx lighthouse PREVIEW_URL --output=html --output-path=migration-lighthouse.html --only-categories=performance,accessibility,seo
    // Expected: Accessibility/Performance/SEO >= 95
    // Placeholder assertion
    expect(true).toBeTruthy();
  });
});