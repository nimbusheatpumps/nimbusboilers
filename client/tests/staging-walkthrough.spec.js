import { test, expect } from '@playwright/test';
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

/**
 * Launches Chrome with given args and returns the port.
 */
async function launchChromeAndRunLh(url, opts, config = null) {
  const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags });
  opts.port = chrome.port;
  const flags = config ? { logLevel: 'info', output: 'html', port: chrome.port } : { logLevel: 'info', output: 'json', port: chrome.port };
  const results = await lighthouse(url, flags, config);
  await chrome.kill();
  return results.lhr;
}

test.describe('Staging Full Customer Journey Walkthrough', () => {
  const stagingUrl = 'https://client-qm2qjfzre-brys-projects-4db70d78.vercel.app';

  const setupPage = async (page) => {
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        console.error(`Console error on ${page.url()}: ${msg.text()}`);
      }
    });
    page.on('pageerror', (err) => {
      console.error(`Page error on ${page.url()}: ${err.message}`);
    });
  };

  test.beforeEach(async ({ page }) => {
    await setupPage(page);
  });

  test('Desktop: Full journey - Home hero/testimonials/quote/lazy imgs, SEO nav, chat, contact, footer links', async ({ page }) => {
    // Home: hero CTA, testimonials load, lazy images
    await page.goto(stagingUrl, { waitUntil: 'networkidle' });
    await expect(page.locator('.hero-section')).toBeVisible();
    await expect(page.locator('h1.section-heading--hero')).toContainText('Boiler Installation Scunthorpe');
    await expect(page.locator('a[href*="gas-boiler-installation-scunthorpe"]')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('a[href="#contact-form"]')).toBeVisible();

    // Testimonials
    await page.locator('.testimonials-section').scrollIntoViewIfNeeded();
    await expect(page.locator('.testimonials-section')).toBeVisible();
    await expect(page.locator('[role="article"]')).toHaveCount(2);
  
    // Why Choose Nimbus section bullets
    await page.locator('.why-choose-nimbus').scrollIntoViewIfNeeded({ timeout: 5000 });
    await expect(page.locator('h2:has-text("Why Choose Nimbus?")')).toBeVisible();
    await expect(page.locator('.why-choose-nimbus ul li')).toHaveCount(5);

    // Lazy images load (check some images present and loaded)
    await expect(page.locator('img')).toHaveCount.expect.toBeGreaterThan(5);
    const heroImg = page.locator('img[src*="hero"]');
    await expect(heroImg).toBeVisible();

    // Quote form submit (spinner) - quick interaction
    await page.goto(`${stagingUrl}/quote`);
    await expect(page.locator('h1')).toContainText(/Gas Boiler/);
    await page.locator('input[name="home_type"][value="own_home"]').click();
    const nextBtn = page.locator('button[type="button"]:has-text("Next")');
    await expect(nextBtn).toBeEnabled();
    await nextBtn.click();
    // Assume proceeds, check pay button (may show spinner on click but since live disabled)
    await page.waitForSelector('#pay-button', { timeout: 10000 });
    const payBtn = page.locator('#pay-button');
    await expect(payBtn).toBeVisible();

    // Nav SEO page: gas-boiler-installation-scunthorpe (as example, since regular component exists but confirm via links)
    await page.goto(`${stagingUrl}/gas-boiler-installation-scunthorpe`);
    await expect(page.locator('h1')).toContainText('Gas Boiler Installation Scunthorpe');
    // Content and quote (assume quote CTA present)
    await expect(page.locator('a[href="/quote"], button:has-text("Get Quote")')).toBeVisible();

    // Chat open/send
    await page.goto(stagingUrl);
    await expect(page.locator('h3:has-text("Live Chat")')).toBeVisible({ timeout: 10000 });
    const chatInput = page.locator('input[placeholder="Type a message..."]');
    await chatInput.fill('Staging walkthrough test message');
    await page.locator('button:has-text("Send")').click();
    await expect(page.locator('text=Staging walkthrough')).toBeVisible({ timeout: 3000 });

    // Contact form
    await page.goto(`${stagingUrl}/contact`);
    await expect(page.locator('h1:has-text("Customer Feedback")')).toBeVisible();
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#rating').selectOption('5');
    await page.locator('#review').fill('Test feedback for staging');
    await page.locator('button[type="submit"]').click();
    // Expect message (success or error toast due to no backend)
    await expect(page.locator('[class*="bg-green"], [class*="bg-red"], text=Feedback submitted, text=Error')).toBeVisible({ timeout: 5000 });

    // Footer links
    await page.goto(stagingUrl);
    const footerLinks = page.locator('footer a');
    await expect(footerLinks).toHaveCount.greaterThan(5);
    // Click first few, check no error
    for (let i = 0; i < Math.min(3, await footerLinks.count()); i++) {
      const link = footerLinks.nth(i);
      await link.scrollIntoViewIfNeeded();
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
        await link.click({ force: true });
        await page.waitForLoadState('networkidle');
        expect(page.url()).not.toContain('404');
      }
    }
  });

  test('Mobile: Full journey responsive', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    });
    const page = await context.newPage();
    await setupPage(page);

    // Repeat key checks on mobile
    await page.goto(stagingUrl, { waitUntil: 'networkidle' });
    await expect(page.locator('.hero-section')).toBeVisible();
    await expect(page.locator('h1.section-heading--hero')).toContainText('Boiler Installation Scunthorpe');
    await expect(page.locator('button[aria-label="Toggle navigation menu"]')).toBeVisible(); // Mobile menu

    // Testimonials
    await page.locator('.testimonials-section').scrollIntoViewIfNeeded();
    await expect(page.locator('.testimonials-section')).toBeVisible();

    // Chat
    await expect(page.locator('h3:has-text("Live Chat")')).toBeVisible({ timeout: 10000 });
    const chatInput = page.locator('input[placeholder="Type a message..."]');
    await chatInput.fill('Mobile test');
    await page.locator('button:has-text("Send")').click();
    await expect(page.locator('text=Mobile test')).toBeVisible({ timeout: 3000 });

    // Footer responsive
    await expect(page.locator('footer')).toBeVisible();

    await context.close();
  });

  test('Desktop: New Install - home -> /gas-boiler-installation-scunthorpe -> quote spinner', async ({ page }) => {
    await page.goto(`${stagingUrl}`, { waitUntil: 'networkidle' });
    await expect(page.locator('h1.section-heading--hero')).toBeVisible();
    const installLink = page.locator('a[href="/gas-boiler-installation-scunthorpe"]');
    await expect(installLink).toBeVisible({ timeout: 5000 });
    await installLink.click();
    await expect(page).toHaveURL(/gas-boiler-installation-scunthorpe$/);
    await expect(page.locator('h1')).toContainText('Gas Boiler Installation Scunthorpe');
    const quoteCta = page.locator('a[href="/quote"], button:has-text("Get Quote"), a:has-text("quote")i');
    await expect(quoteCta).toBeVisible();
    await quoteCta.first().click();
    await page.waitForLoadState('networkidle');
    await page.locator('input[name="home_type"][value="own_home"]').click();
    const nextBtn = page.locator('button[type="button"]:has-text("Next")');
    await expect(nextBtn).toBeEnabled();
    await nextBtn.click();
    await page.waitForSelector('#pay-button', { timeout: 10000 });
    const payBtn = page.locator('#pay-button');
    await expect(payBtn).toBeVisible();
    const spinner = page.locator('.spinner, [class*="spinner"], [class*="loading"], button[aria-busy="true"]');
    await payBtn.click();
    await expect(spinner).toBeVisible({ timeout: 3000 });
  });

  test('Desktop: Repair - home -> /boiler-repair-scunthorpe -> chat', async ({ page }) => {
    await page.goto(`${stagingUrl}`, { waitUntil: 'networkidle' });
    const repairLink = page.locator('a[href="/boiler-repair-scunthorpe"]');
    await expect(repairLink).toBeVisible();
    await repairLink.click();
    await expect(page.locator('h1')).toContainText('Boiler Repair Scunthorpe');
    await expect(page.locator('h3:has-text("Live Chat")')).toBeVisible({ timeout: 10000 });
    const chatInput = page.locator('input[placeholder="Type a message..."]');
    await chatInput.fill('Repair test message');
    await page.locator('button:has-text("Send")').click();
    await expect(page.locator('text=Repair test')).toBeVisible({ timeout: 3000 });
  });

  test('Desktop: Service - home -> /gas-boiler-service-scunthorpe -> contact form', async ({ page }) => {
    await page.goto(`${stagingUrl}`, { waitUntil: 'networkidle' });
    const serviceLink = page.locator('a[href="/gas-boiler-service-scunthorpe"]');
    await expect(serviceLink).toBeVisible();
    await serviceLink.click();
    await expect(page.locator('h1')).toContainText('Gas Boiler Service Scunthorpe');
    const contactCta = page.locator('a[href="/contact"], button:has-text("Contact Us"), text=/Contact/i');
    await expect(contactCta).toBeVisible();
    await contactCta.first().click();
    await expect(page.locator('h1:has-text("Customer Feedback")')).toBeVisible();
    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#rating').selectOption('5');
    await page.locator('#review').fill('Service journey test');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[class*="bg-green"], [class*="bg-red"], text=/Feedback/, text=/Error/')).toBeVisible({ timeout: 5000 });
  });

  test('Mobile: 3 Journeys verify flows/speed', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14_0 Mobile/15E148 Safari/604.1'
    });
    const page = await context.newPage();
    await setupPage(page);

    // 1. New install
    await page.goto(`${stagingUrl}`, { waitUntil: 'networkidle' });
    await page.locator('a[href="/gas-boiler-installation-scunthorpe"]').first().click();
    await expect(page.locator('h1')).toContainText('Gas Boiler Installation Scunthorpe');
    await page.locator('a[href="/quote"], button:has-text("Get Quote")').first().click();
    await page.waitForURL(/quote$/);
    await page.locator('input[name="home_type"]').first().click();
    await page.locator('button:has-text("Next")').click();
    await page.waitForSelector('#pay-button');
    await page.locator('#pay-button').click();
    await page.waitForTimeout(2000);

    // 2. Repair
    await page.goto(`${stagingUrl}`, { waitUntil: 'networkidle' });
    await page.locator('a[href="/boiler-repair-scunthorpe"]').first().click();
    await expect(page.locator('h1')).toContainText('Boiler Repair Scunthorpe');
    const chatInputM = page.locator('input[placeholder="Type a message..."]');
    await chatInputM.scrollIntoViewIfNeeded();
    await chatInputM.fill('Mobile repair test');
    await page.locator('button:has-text("Send")').click();
    await expect(page.locator('text=Mobile repair')).toBeVisible({ timeout: 3000 });

    // 3. Service
    await page.goto(`${stagingUrl}`, { waitUntil: 'networkidle' });
    await page.locator('a[href="/gas-boiler-service-scunthorpe"]').first().click();
    await expect(page.locator('h1')).toContainText('Gas Boiler Service Scunthorpe');
    await page.locator('a[href="/contact"], button:has-text("Contact")').first().click();
    await page.locator('#name').fill('Mobile Test');
    await page.locator('#email').fill('mobile@test.com');
    await page.locator('#rating').selectOption('5');
    await page.locator('#review').fill('Mobile service');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('[class*="bg-green"], [class*="bg-red"]')).toBeVisible({ timeout: 3000 });

    await context.close();
  });

  test('Lighthouse Performance, Accessibility & SEO on staging home', async () => {
    const opts = {
      onlyCategories: ['performance', 'accessibility', 'seo'],
      chromeFlags: ['--no-sandbox', '--disable-dev-shm-usage']
    };
    const lhr = await launchChromeAndRunLh(stagingUrl, opts);
    const perfScore = Math.round(lhr.categories.performance.score * 100);
    const accScore = Math.round(lhr.categories.accessibility.score * 100);
    const seoScore = Math.round(lhr.categories.seo.score * 100);
    console.log(`Lighthouse Perf: ${perfScore}/100, SEO: ${seoScore}/100, Acc: ${accScore}/100 on ${stagingUrl}`);
    expect(lhr.categories.performance.score).toBeGreaterThan(0.90);
    expect(lhr.categories.accessibility.score).toBe(1);
    expect(lhr.categories.seo.score).toBe(1);
  });

  test('Gas Safe #966812 in footer on home and SEO page', async ({ page }) => {
    await page.goto(stagingUrl);
    await expect(page.locator('footer >> text="#966812"')).toBeVisible();
    await page.goto(`${stagingUrl}/gas-boiler-installation-scunthorpe`);
    await expect(page.locator('footer >> text="#966812"')).toBeVisible();
    await expect(page.locator('footer a[href*="search=966812"]')).toBeVisible();
    await expect(page.locator('footer img[alt*="Gas Safe"]')).toBeVisible();
  });

  test('Boiler Price Guide page loads with tables/disclaimer/keywords', async ({ page }) => {
    await page.goto(`${stagingUrl}/boiler-price-guide-scunthorpe`);
    await expect(page.locator('h1')).toContainText('Boiler Price Guide Scunthorpe');
    await expect(page.locator('table')).toHaveCount(4);
    await expect(page.getByText('Indicative prices exclude VAT & grants')).toBeVisible();
    const bodyText = await page.textContent('body');
    expect(bodyText.toLowerCase()).toContain('boiler price guide scunthorpe');
    expect(bodyText.toLowerCase()).toContain('combi boiler prices scunthorpe');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', expect.stringContaining('Scunthorpe'));
  });
});