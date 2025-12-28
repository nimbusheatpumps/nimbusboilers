import { test, expect } from '@playwright/test';

test.describe('SEO Pages Verification', () => {
  const baseUrl = 'http://localhost:3000';

  const seoPages = [
    {
      path: '/gas-boiler-installation-scunthorpe',
      titleRegex: /Gas Boiler Installation Scunthorpe/i,
      h1Text: 'Gas Boiler Installation Scunthorpe | Expert Local Installers',
      keywords: ['gas boiler installation scunthorpe', 'gas safe', 'boiler service scunthorpe']
    },
    {
      path: '/gas-boiler-service-scunthorpe',
      titleRegex: /Gas Boiler Service Scunthorpe/i,
      h1Text: 'Gas Boiler Service Scunthorpe',
      keywords: ['gas boiler service scunthorpe', 'gas safe', 'annual boiler servicing']
    },
    {
      path: '/gas-boiler-service-north-lincolnshire',
      titleRegex: /Gas Boiler Service North Lincolnshire/i,
      h1Text: 'Gas Boiler Service North Lincolnshire | Annual Servicing Experts',
      keywords: ['gas boiler service north lincolnshire', 'boiler service scunthorpe', 'gas safe']
    },
    {
      path: '/gas-boiler-repair-scunthorpe',
      titleRegex: /Boiler Repair Scunthorpe/i,
      h1Text: 'Gas Boiler Repair Scunthorpe | 24/7 Emergency Repairs',
      keywords: ['boiler repair scunthorpe', 'gas boiler service scunthorpe', 'gas safe']
    },
    {
      path: '/gas-safe-boiler-installers-scunthorpe',
      titleRegex: /Gas Safe Boiler Installers Scunthorpe/i,
      h1Text: 'Gas Safe Boiler Installers Scunthorpe | Expert Gas Boiler Installation North Lincolnshire',
      keywords: ['gas safe boiler installers scunthorpe', 'gas boiler installation scunthorpe', 'certified gas safe']
    }
  ];

  test.beforeEach(async ({ browser }) => {
    // Ensure dev server is running, but assume it is
  });

  for (const pageInfo of seoPages) {
    test(`Verify SEO elements on ${pageInfo.path}`, async ({ page }) => {
      await page.goto(baseUrl + pageInfo.path);

      // Page loads successfully
      await expect(page).toHaveURL(new RegExp(pageInfo.path + '$'));
      await expect(page.locator('h1')).toBeVisible();

      // Title
      await expect(page).toHaveTitle(pageInfo.titleRegex);

      // H1
      await expect(page.locator('h1')).toContainText(pageInfo.h1Text);

      // Keywords in content
      const bodyText = await page.textContent('body');
      for (const keyword of pageInfo.keywords) {
        expect(bodyText.toLowerCase()).toContain(keyword.toLowerCase());
      }

      // Schema structured data
      const htmlContent = await page.content();
      expect(htmlContent).toContain('"@type": "LocalBusiness"');
      expect(htmlContent).toContain('"@type": "Service"');
      expect(htmlContent).toContain('"@type": "FAQPage"');

      // Meta tags
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', expect.stringContaining('Scunthorpe'));
      await expect(page.locator('meta[name="keywords"]')).toHaveAttribute('content', expect.stringContaining('scunthorpe'));
      await expect(page.locator('link[rel="canonical"]')).toBeVisible();

      // Images have alt
      const images = await page.$$('img');
      for (const img of images) {
        const alt = await img.getAttribute('alt');
        expect(alt && alt.trim().length > 0).toBeTruthy();
      }

      // Accessibility basics
      await expect(page.locator('main')).toHaveAttribute('role', 'main');
      await expect(page.locator('[aria-label="Main navigation"]')).toBeVisible();
      await expect(page.locator('button[aria-label="Toggle navigation menu"]')).toBeVisible();

      // Skip link
      await expect(page.locator('a[href="#main-content"]')).toBeVisible();

      // FAQ accordion accessible
      const faqQuestions = page.locator('.faq-question');
      await expect(faqQuestions).toHaveCount.gt(0);
      await expect(faqQuestions.first()).toHaveAttribute('role', 'button');
      await expect(faqQuestions.first()).toHaveAttribute('tabindex', '0');

      // No console errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          console.log(`Page console error: ${msg.text()}`);
        }
      });
      await page.waitForLoadState('networkidle');
    });
  }

  test('Verify gas boiler prominence on home page', async ({ page }) => {
    await page.goto(baseUrl + '/');

    // Prominent links in nav/home
    const seoLinks = [
      '/gas-boiler-installation-scunthorpe',
      '/gas-boiler-service-scunthorpe',
      '/gas-boiler-repair-scunthorpe'
    ];
    for (const linkPath of seoLinks) {
      await expect(page.locator(`a[href*="${linkPath}"]`)).toBeVisible({ timeout: 5000 });
    }

    // Keywords in H1/H2
    await expect(page.locator('h1')).toContainText(/Boiler Installation Scunthorpe/i);
    const bodyText = await page.textContent('body');
    expect(bodyText.toLowerCase()).toContain('gas boiler');
    expect(bodyText.toLowerCase()).toContain('scunthorpe');
  });
});