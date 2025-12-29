import { test, expect } from '@playwright/test';

test.describe('Home Page Flow: Hero → CTA → Services → Testimonials (8 reviews) → Footer', () => {
  test('Verify complete home flow, mobile responsiveness, ARIA on desktop', async ({ page }) => {
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`Console error: ${msg.text()}`);
      }
    });

    await page.goto('http://localhost:3000');

    // Hero section
    await expect(page.locator('.hero-section')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('h1.section-heading--hero')).toContainText('Boiler Installation Scunthorpe');

    // CTA buttons
    await expect(page.locator('a[href*=\"gas-boiler-installation-scunthorpe\"]')).toBeVisible();
    await expect(page.locator('a[href=\"#contact-form\"]')).toBeVisible();

    // Services section
    await expect(page.locator('.our-services-section')).toBeVisible();
    await expect(page.locator('.service-card')).toHaveCount(11);

    // Testimonials section - verify 8 reviews display
    await expect(page.locator('.testimonials-section')).toBeVisible();
    await expect(page.locator('[role=\"article\"]')).toHaveCount(8);

    // Footer
    await expect(page.locator('.company-details-section')).toBeVisible();

    // ARIA compliance basics
    await expect(page.locator('nav[aria-label=\"Main navigation\"]')).toBeVisible();
    await expect(page.locator('button[aria-label=\"Toggle navigation menu\"]')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
  });

  test('Verify complete home flow, mobile responsiveness, ARIA on mobile', async ({ page, browser }) => {
    const context = await browser.newContext({
      viewport: { width: 375, height: 667 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    });
    const mpage = await context.newPage();

    mpage.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`Mobile console error: ${msg.text()}`);
      }
    });

    await mpage.goto('http://localhost:3000');

    // Hero section
    await expect(mpage.locator('.hero-section')).toBeVisible({ timeout: 15000 });
    await expect(mpage.locator('h1.section-heading--hero')).toContainText('Boiler Installation Scunthorpe');

    // CTA buttons
    await expect(mpage.locator('a[href*=\"gas-boiler-installation-scunthorpe\"]')).toBeVisible();
    await expect(mpage.locator('a[href=\"#contact-form\"]')).toBeVisible();

    // Services section
    await expect(mpage.locator('.our-services-section')).toBeVisible();
    await expect(mpage.locator('.service-card')).toHaveCount(11);

    // Testimonials section - verify 8 reviews display
    await expect(mpage.locator('.testimonials-section')).toBeVisible();
    await expect(mpage.locator('[role=\"article\"]')).toHaveCount(8);

    // Footer
    await expect(mpage.locator('.company-details-section')).toBeVisible();

    // ARIA compliance basics on mobile
    await expect(mpage.locator('nav[aria-label=\"Main navigation\"]')).toBeVisible();
    await expect(mpage.locator('button[aria-label=\"Toggle navigation menu\"]')).toBeVisible();
    await expect(mpage.locator('main')).toBeVisible();

    await context.close();
  });
});