import { test, expect } from '@playwright/test';

test.describe('Gas Boiler Maintenance Tips Scunthorpe Page', () => {
  const baseUrl = 'http://localhost:3000';
  const path = '/gas-boiler-maintenance-tips-scunthorpe';

  test('should load the page and verify key elements', async ({ page }) => {
    await page.goto(baseUrl + path);

    // Verify H1
    await expect(page.locator('h1').first()).toContainText('Gas Boiler Maintenance Tips Scunthorpe');

    // Verify H2s (at least 4)
    const h2s = page.locator('h2');
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThanOrEqual(4);

    // Verify specific H2 sections
    await expect(page.getByText('Why Regular Maintenance Matters')).toBeVisible();
    await expect(page.getByText('Annual Gas Safe Service (966812)')).toBeVisible();
    await expect(page.getByText('DIY Tips: Check Boiler Pressure, Bleed Radiators, Clean Filters')).toBeVisible();
    await expect(page.getByText('When to Call Professionals')).toBeVisible();

    // Verify tips bullets
    const bullets = page.locator('ul.section-list li');
    expect(await bullets.count()).toBeGreaterThan(0);

    // Verify keywords in content
    const content = await page.textContent('body');
    expect(content).toContain('gas boiler service Scunthorpe');
    expect(content).toContain('gas boiler repair North Lincolnshire');
    expect(content).toContain('gas boiler installation Scunthorpe');

    // Verify Article Schema
    const schemaScript = page.locator('script[type="application/ld+json"]');
    const schemaCount = await schemaScript.count();
    let foundArticle = false;
    for (let i = 0; i < schemaCount; i++) {
      const text = await schemaScript.nth(i).textContent();
      // Use a more robust check for Article type
      if (text && text.includes('"@type":"Article"')) {
        foundArticle = true;
        // Relaxed check for headline if needed, but let's keep it strict first
        const json = JSON.parse(text);
        expect(json.headline).toBe('Gas Boiler Maintenance Tips Scunthorpe');
        break;
      }
    }
    // If not found, log what was found
    if (!foundArticle) {
        for (let i = 0; i < schemaCount; i++) {
            console.log(`Schema ${i}:`, await schemaScript.nth(i).textContent());
        }
    }
    expect(foundArticle).toBe(true);

    // Verify QuoteForm
    await expect(page.locator('form')).toBeVisible();
  });
});
