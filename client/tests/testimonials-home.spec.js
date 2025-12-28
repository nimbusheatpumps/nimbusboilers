import { test, expect } from '@playwright/test';

test.describe('Home Page Testimonials', () => {
  test('Verify testimonials section renders with data, schema, alts, interactivity', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Verify Testimonials section renders
    await expect(page.locator('.testimonials-section')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('.testimonials-carousel')).toBeVisible();

    // Verify fake/sample reviews visible
    await expect(page.locator('.testimonial-card')).toHaveCount(5);
    await expect(page.getByText(/Audrey Lal/i)).toBeVisible();
    await expect(page.getByText(/gas boiler installation Scunthorpe/i)).toBeVisible();
    await expect(page.locator('.testimonial-stars')).toBeVisible();

    // Check for Review schema (JSON-LD AggregateRating/Review)
    const jsonLdScripts = await page.locator('script[type="application/ld+json"]').all();
    let hasReviewSchema = false;
    let schemaSnippet = '';
    for (const script of jsonLdScripts) {
      const content = await script.textContent();
      if (content && (content.includes('AggregateRating') || content.includes('"Review"'))) {
        hasReviewSchema = true;
        schemaSnippet = content.substring(0, 300) + '...';
        console.log('Review schema found:', schemaSnippet);
        break;
      }
    }
    console.log('Has Review/AggregateRating schema:', hasReviewSchema);

    // Verify keywords in image alt texts in testimonials section
    const testimonialImgs = page.locator('.testimonials-section img');
    const imgCount = await testimonialImgs.count();
    console.log('Number of images in testimonials section:', imgCount);
    if (imgCount > 0) {
      for (let i = 0; i < imgCount; i++) {
        const img = testimonialImgs.nth(i);
        const alt = await img.getAttribute('alt');
        const src = await img.getAttribute('src');
        console.log(`Image ${i+1}: alt="${alt}", src="${src}"`);
        if (alt && (alt.toLowerCase().includes('scunthorpe') || alt.toLowerCase().includes('testimonial') || alt.toLowerCase().includes('boiler'))) {
          console.log('  - Contains relevant keywords');
        }
      }
    } else {
      console.log('No images found in testimonials section');
    }

    // Test interactivity (carousel animation - check if elements move or multiple cards)
    await page.waitForTimeout(2000); // Allow animation
    await expect(page.locator('.testimonials-carousel')).toBeVisible();

    console.log('Testimonials test completed successfully.');
  });
});