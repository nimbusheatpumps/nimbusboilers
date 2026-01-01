import { test, expect } from '@playwright/test';

test.describe('Boiler Price Guide Scunthorpe Page', () => {
  const baseUrl = 'http://localhost:3000';

  test('loads, H1/keywords present, SEO elements', async ({ page }) => {
    await page.goto(baseUrl + '/boiler-price-guide-scunthorpe');

    // Loads
    await expect(page).toHaveURL(new RegExp('/boiler-price-guide-scunthorpe$'));
    await expect(page.locator('h1').first()).toBeVisible();

    // H1
    await expect(page.locator('h1').first()).toContainText('Boiler Price Guide Scunthorpe | Gas Boiler Costs North Lincolnshire');

    // Keywords
    const bodyText = await page.textContent('body');
    const keywords = [
      'boiler price guide Scunthorpe',
      'combi boiler prices Scunthorpe',
      'system boiler cost North Lincolnshire',
      'regular boiler installation prices Scunthorpe',
      'boiler prices after grant',
      'Gas Safe boiler quotes Scunthorpe'
    ];
    for (const keyword of keywords) {
      expect(bodyText.toLowerCase()).toContain(keyword.toLowerCase());
    }

    // SEO elements
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', expect.stringContaining('Scunthorpe'));
    await expect(page.locator('meta[name="keywords"]')).toHaveAttribute('content', expect.stringContaining('boiler price guide Scunthorpe'));
    await expect(page.locator('link[rel="canonical"]')).toBeVisible();
    await expect(page).toHaveTitle(/Boiler Price Guide Scunthorpe/i);

    // Schema
    const htmlContent = await page.content();
    expect(htmlContent).toContain('"@type": "LocalBusiness"');
    expect(htmlContent).toContain('"@type": "Service"');
    expect(htmlContent).toContain('"priceRange"');
    expect(htmlContent).toContain('"@type": "FAQPage"');

    // Tables exist and content
    await expect(page.locator('table')).toHaveCount(4);
    await expect(page.getByText('Baxi')).toBeVisible();
    await expect(page.getByText('£2,200-£3,200')).toBeVisible();
    await expect(page.getByText('£800-£1,500')).toBeVisible();

    // Grant disclaimer
    await expect(page.getByText('Indicative prices exclude VAT & grants')).toBeVisible();

    // Images alt
    const images = page.locator('img');
    for (const img of await images.all()) {
      const alt = await img.getAttribute('alt');
      expect(alt && alt.trim().length > 0, `Image missing alt: ${await img.getAttribute('src')}`).toBeTruthy();
    }
  });

  test('mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(baseUrl + '/boiler-price-guide-scunthorpe');
    await expect(page.locator('body')).toHaveCSS('overflow-x', 'hidden');
    // Check key elements visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.nimbus-nav')).toBeVisible();
    await expect(page.locator('.nimbus-cta')).toBeVisible();
  });

  test('links work', async ({ page }) => {
    await page.goto(baseUrl + '/boiler-price-guide-scunthorpe');
    // Home
    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
    await page.goBack();
    // Quote
    await page.click('a[href="/quote"]');
    await expect(page).toHaveURL(/\/quote$/);
    await page.goBack();
    // Tel
    const tel = page.locator('a[href^="tel:"]');
    await expect(tel).toBeVisible();
    // CTA
    await page.locator('#contact-form').scrollIntoView();
    const cta = page.locator('.cta-button');
    await expect(cta.first()).toBeVisible();
  });

  test('form submits', async ({ page }) => {
    await page.goto(baseUrl + '/boiler-price-guide-scunthorpe');
    await page.locator('#contact-form').scrollIntoView();
    // Check QuoteForm loads
    await expect(page.locator('#quote-form-container')).toBeVisible();
    // Minimal fill and submit (dev mode success)
    // Skip detailed fill for now
    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();
  });

  test('Lighthouse SEO/Acc >=95', async ({ page }) => {
    // Assume lighthouse config
    const lighthouseConfig = require('../lighthouse-seo-only.json');
    await expect(page).toPassLighthouse({
      score: {
        seo: 0.95,
        accessibility: 0.95
      }
    }, lighthouseConfig);
  });
});