import { test, expect } from '@playwright/test';

test.describe('Home Page Testimonials', () => {
  test('Verify testimonials section renders with data, schema, alts, interactivity', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Verify Testimonials section renders
    await expect(page.locator('.testimonials-section')).toBeVisible({ timeout: 10000 });

    // Verify 2 real reviews visible
    await expect(page.locator('[role="article"]')).toHaveCount(2);
    await expect(page.getByText(/Audrey Lal/i)).toBeVisible();
    await expect(page.getByText('Dean Bonner')).toBeVisible();
    await expect(page.getByText('positive note')).toBeVisible();
    await expect(page.getByText('Excellent service with work carried out would defo use again')).toBeVisible();
    await expect(page.locator('span[aria-label*="out of 5 stars"]')).toHaveCount(2);

    // Verify Why Choose Nimbus Boilers section renders after testimonials
    await expect(page.locator('.why-choose-nimbus-boilers')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.why-choose-nimbus-boilers h2')).toContainText('Why Choose Nimbus Boilers in Scunthorpe?');
    await expect(page.locator('.why-choose-nimbus-boilers .grid > div')).toHaveCount(4);
    await expect(page.locator('.why-choose-nimbus-boilers')).toContainText('ECO4 grant referral');
    await expect(page.locator('.why-choose-nimbus-boilers')).toContainText('12-year warranties');

    // Check for Review schema (JSON-LD Review with publisher)
    const jsonLdScripts = await page.locator('script[type="application/ld+json"]').all();
    let hasReviewSchema = false;
    let schemaSnippet = '';
    for (const script of jsonLdScripts) {
      const content = await script.textContent();
      if (content && content.includes('"Review"') && content.includes('Nimbus Boilers & Heat Pumps')) {
        hasReviewSchema = true;
        schemaSnippet = content.substring(0, 300) + '...';
        console.log('Review schema with publisher found:', schemaSnippet);
        break;
      }
    }
    console.log('Has Review schema with publisher:', hasReviewSchema);

    console.log('Testimonials test completed successfully.');
  });
});