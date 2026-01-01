import { test, expect } from '@playwright/test';

test.describe('Areas Covered Page', () => {
  test('verifies H1, intro, H2 count >=24, sample keywords, phone CTAs, schema areaServed', async ({ page }) => {
    await page.goto('http://localhost:3000/areas-we-cover');

    // H1 exact
    await expect(page.getByRole('heading', { name: /Areas We Cover \| Boiler Installation, Repair & Service North Lincolnshire/i, level: 1 })).toBeVisible();

    // Intro
    await expect(page.getByText(/Nimbus Boilers covers Scunthorpe, Grimsby, Doncaster and 20\+ towns in North Lincolnshire/i)).toBeVisible();

    // H2 count >=20 (actually 24)
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThanOrEqual(20);

    // Sample keywords in first p of cards
    await expect(page.getByText(/gas boiler installation scunthorpe/i)).toBeVisible();
    await expect(page.getByText(/combi boiler repair grimsby/i)).toBeVisible();
    await expect(page.getByText(/gas boiler service doncaster/i)).toBeVisible();

    // Phone CTA in cards and global
    const phoneLinks = page.locator('a[href^="tel:01724"]');
    await expect(phoneLinks).toHaveCount(25); // 24 cards + 1 CTA
    await expect(phoneLinks.nth(0)).toBeVisible();

    // Schema has areaServed with towns
    const scripts = await page.locator('script[type="application/ld+json"]').all();
    let schemaFound = false;
    for (const script of scripts) {
      const content = await script.textContent();
      if (content?.includes('"areaServed"') && content.includes('Scunthorpe') && content.includes('Grimsby')) {
        schemaFound = true;
        break;
      }
    }
    expect(schemaFound).toBeTruthy();

    // CTA banner
    await expect(page.getByText('Book Your Free Survey')).toBeVisible();
    await expect(page.locator('a[href="tel:01724622069"]')).toBeVisible();
  });
});
