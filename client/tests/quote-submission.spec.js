import { test, expect } from '@playwright/test';

test.describe('QuoteForm Submission', () => {
  test('happy path: submit valid quote form', async ({ page }) => {
    let requestBody;
    await page.route('**/contact', async (route) => {
      if (route.request().method() === 'POST') {
        requestBody = route.request().postDataJSON();
      }
      await route.continue();
    });

    await page.goto('http://localhost:3000/quote');

    // Fill minimal required fields for steps 1-4
    await page.locator('input[name="home_type"][value="own_home"]').check();
    await page.locator('button[type="button"]').first().click();

    await page.locator('input[name="property_type"][value="flat"]').check();
    await page.locator('button[type="button"]').nth(1).click();

    await page.locator('input[name="bedrooms"][value="1"]').check();
    await page.locator('button[type="button"]').nth(1).click();

    await page.locator('input[name="bathrooms"][value="1"]').check();
    await page.locator('input[name="occupants"][value="1-2"]').check();
    await page.locator('button[type="button"]').nth(1).click();

    // Advance through steps 5-13 by clicking next (assuming no validation blocks)
    for (let i = 0; i < 9; i++) {
      await page.locator('button[type="button"]:has-text(/Next|Step/i)').click();
      await page.waitForTimeout(200);
    }

    // Step 14: Contact details
    await expect(page.locator('#step14')).toBeVisible({ timeout: 10000 });
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('button[type="button"]').nth(1).click();

    // Step 15: Quote
    await page.locator('input[name="boiler_option"]').first().check();
    await page.click('button[type="submit"]');

    // Verify success toast
    await expect(page.getByText('Quote submitted successfully! We will contact you soon.')).toBeVisible({ timeout: 5000 });

    // Verify request data
    expect(requestBody).toMatchObject({
      name: 'Test User',
      email: 'test@example.com',
      propertySize: 'flat',
      boilerType: expect.any(String)
    });
  });

  test('error: invalid email in step14', async ({ page }) => {
    // Fill to step14
    await page.goto('http://localhost:3000/quote');
    // ... fill 1-4 and advance as above
    // then
    await page.locator('input[name="name"]').fill('Test User');
    await page.locator('input[name="email"]').fill('invalid');
    await page.locator('button[type="button"]').nth(1).click();
    await expect(page.locator('text=Please enter a valid email address.')).toBeVisible();
  });
});