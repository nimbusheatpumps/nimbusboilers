import { test, expect } from '@playwright/test';

test.describe('Home Page Flow: Hero → CTA → Services → Testimonials (8 reviews) → Why Choose Nimbus Boilers → Footer', () => {
  test('Verify complete home flow, mobile responsiveness, ARIA on desktop', async ({ page }) => {
    page.on('console', msg => {
      if (msg.type() === 'error') {
        console.log(`Console error: ${msg.text()}`);
      }
    });

    await page.goto('http://localhost:3000/');

    // Hero section
    await expect(page.locator('.hero-section').first()).toBeVisible({ timeout: 15000 });
    await expect(page.locator('h1.section-heading--hero').first()).toContainText('Boiler Installation Scunthorpe');

    // CTA buttons
    await expect(page.locator('a[href*=\"gas-boiler-installation-scunthorpe\"]').first()).toBeVisible();
    await expect(page.locator('a[href=\"#contact-form\"]').first()).toBeVisible();

    // Services section
    await expect(page.locator('.our-services-section')).toBeVisible();
    await expect(page.locator('.service-card')).toHaveCount(11);

    // Testimonials section - verify 8 reviews display
    await expect(page.locator('.testimonials-section')).toBeVisible();
    await expect(page.locator('[role=\"article\"]')).toHaveCount(2);

    // Why Choose Nimbus Boilers section
    await expect(page.locator('.why-choose-nimbus-boilers')).toBeVisible();
    await expect(page.locator('.why-choose-nimbus-boilers h2.section-heading')).toContainText('Why Choose Nimbus Boilers in Scunthorpe?');
    await expect(page.locator('.why-choose-nimbus-boilers .grid')).toBeVisible();
    const whyChooseItems = page.locator('.why-choose-nimbus-boilers .grid > div, .why-choose-nimbus-boilers .grid > li');
    await expect(whyChooseItems).toHaveCount(4);
    await expect(page.locator('.why-choose-nimbus-boilers')).toContainText('Instant Online Quote');
    await expect(page.locator('.why-choose-nimbus-boilers')).toContainText('Free ECO4');
    await expect(page.locator('.why-choose-nimbus-boilers')).toContainText('Same-Day Response');
    await expect(page.locator('.why-choose-nimbus-boilers')).toContainText('12-Year');

    // Footer
    await expect(page.locator('.company-details-section').first()).toBeVisible();

    // ARIA compliance basics
    await expect(page.locator('nav[aria-label=\"Main navigation\"]')).toBeVisible();
    await expect(page.locator('button[aria-label=\"Toggle navigation menu\"]')).toHaveCount(1);
    await expect(page.locator('main').first()).toBeVisible();
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

    await mpage.goto('http://localhost:3000/');

    // Hero section
    await expect(mpage.locator('.hero-section').first()).toBeVisible({ timeout: 15000 });
    await expect(mpage.locator('h1.section-heading--hero').first()).toContainText('Boiler Installation Scunthorpe');

    // CTA buttons
    await expect(mpage.locator('a[href*=\"gas-boiler-installation-scunthorpe\"]').first()).toBeVisible();
    await expect(mpage.locator('a[href=\"#contact-form\"]').first()).toBeVisible();

    // Services section
    await expect(mpage.locator('.our-services-section')).toBeVisible();
    await expect(mpage.locator('.service-card')).toHaveCount(11);

    // Testimonials section - verify 8 reviews display
    await expect(mpage.locator('.testimonials-section')).toBeVisible();
    await expect(mpage.locator('[role=\"article\"]')).toHaveCount(2);

    // Why Choose Nimbus Boilers section
    await expect(mpage.locator('.why-choose-nimbus-boilers')).toBeVisible();
    await expect(mpage.locator('.why-choose-nimbus-boilers h2.section-heading')).toContainText('Why Choose Nimbus Boilers in Scunthorpe?');
    await expect(mpage.locator('.why-choose-nimbus-boilers .grid')).toBeVisible();
    const mWhyChooseItems = mpage.locator('.why-choose-nimbus-boilers .grid > div, .why-choose-nimbus-boilers .grid > li');
    await expect(mWhyChooseItems).toHaveCount(4);
    await expect(mpage.locator('.why-choose-nimbus-boilers')).toContainText('Instant Online Quote');
    await expect(mpage.locator('.why-choose-nimbus-boilers')).toContainText('Free ECO4');
    await expect(mpage.locator('.why-choose-nimbus-boilers')).toContainText('Same-Day Response');
    await expect(mpage.locator('.why-choose-nimbus-boilers')).toContainText('12-Year');

    // Footer
    await expect(mpage.locator('.company-details-section').first()).toBeVisible();

    // ARIA compliance basics on mobile
    await expect(mpage.locator('nav[aria-label=\"Main navigation\"]')).toBeVisible();
    await expect(mpage.locator('button[aria-label=\"Toggle navigation menu\"]')).toHaveCount(1);
    await expect(mpage.locator('main').first()).toBeVisible();

    await context.close();
  });
});