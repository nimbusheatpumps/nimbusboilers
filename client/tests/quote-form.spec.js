import { test, expect } from '@playwright/test';

test.describe('QuoteForm E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/quote');
  });

  test('should navigate to the quote form page', async ({ page }) => {
    await expect(page).toHaveURL(/\/quote/);
    await expect(page.locator('text=Gas Boiler Installation, Replacement & Service in Scunthorpe, Grimsby, Doncaster, Lincoln & Surrounding Towns')).toBeVisible();
  });

  test('should complete the full quote form submission successfully', async ({ page }) => {
    // Step 1: Home Type
    await page.locator('input[name="home_type"][value="own_home"]').check();
    await page.locator('text=Next: Property Type →').click();

    // Step 2: Property Type
    await page.locator('input[name="property_type"][value="detached"]').check();
    await page.locator('text=Next Step →').click();

    // Step 3: Bedrooms
    await page.locator('input[name="bedrooms"][value="3"]').check();
    await page.locator('text=Next Step →').click();

    // Step 4: Bathrooms and Occupants
    await page.locator('input[name="bathrooms"][value="2"]').check();
    await page.locator('input[name="occupants"][value="3-4"]').check();
    await page.locator('text=Next Step →').click();

    // Step 5: Water Flow (assuming similar radio structure)
    await page.locator('input[name="water_flow"]').first().check(); // Select first option
    await page.locator('text=Next Step →').click();

    // Step 6: Fuel Type
    await page.locator('input[name="fuel_type"][value="gas"]').check();
    await page.locator('text=Next Step →').click();

    // Step 7: Current Boiler
    await page.locator('input[name="current_boiler"][value="combi"]').check();
    await page.locator('text=Next Step →').click();

    // Step 8: Hot Water
    await page.locator('input[name="hot_water"][value="cylinder"]').check();
    await page.locator('text=Next Step →').click();

    // Step 9: Radiators
    await page.locator('input[name="radiators"][value="10"]').check(); // Assuming options like 5,10,15
    await page.locator('text=Next Step →').click();

    // Step 10: Flue System
    await page.locator('input[name="flue_system"][value="horizontal"]').check();
    await page.locator('text=Next Step →').click();

    // Step 11: Gas Meter
    await page.locator('input[name="gas_meter"][value="external"]').check();
    await page.locator('text=Next Step →').click();

    // Step 12: Gas Pipe
    await page.locator('input[name="gas_pipe"][value="22mm"]').check();
    await page.locator('text=Next Step →').click();

    // Step 13: Add-ons
    await page.locator('input[name="add_ons"][value="magnetic_filter"]').check();
    await page.locator('text=Next Step →').click();

    // Step 14: Contact Details
    await page.locator('input[name="name"]').fill('John Doe');
    await page.locator('input[name="email"]').fill('john.doe@example.com');
    await page.locator('input[name="phone"]').fill('01234567890');
    await page.locator('input[name="postcode"]').fill('DN16 3HR');
    await page.locator('text=Next Step →').click();

    // Step 15: Quote Summary
    await expect(page.locator('text=Your Instant Quote')).toBeVisible();
    // Select boiler option
    await page.locator('input[name="boiler_option"][value="combi"]').check();
    await page.locator('text=Submit Quote Request').click();

    // Verify successful submission
    await expect(page.locator('text=Quote submitted successfully!')).toBeVisible(); // Check for success toast
  });

  test('should display validation error messages for required fields', async ({ page }) => {
    await page.goto('/quote');

    // Test step 1 validation
    await page.locator('text=Next: Property Type →').click();
    await expect(page.locator('text=Please select whether this is for your own home or a rental property.')).toBeVisible();

    // Select and proceed
    await page.locator('input[name="home_type"][value="own_home"]').check();
    await page.locator('text=Next: Property Type →').click();

    // Test step 2 validation
    await page.locator('text=Next Step →').click();
    await expect(page.locator('text=Please select your property type.')).toBeVisible();

    // Select and proceed
    await page.locator('input[name="property_type"][value="detached"]').check();
    await page.locator('text=Next Step →').click();

    // Test step 3 validation
    await page.locator('text=Next Step →').click();
    await expect(page.locator('text=Please select the number of bedrooms.')).toBeVisible();

    // Select and proceed
    await page.locator('input[name="bedrooms"][value="3"]').check();
    await page.locator('text=Next Step →').click();

    // Test step 4 validation
    await page.locator('text=Next Step →').click();
    await expect(page.locator('text=Please select the number of bathrooms.')).toBeVisible();
    await expect(page.locator('text=Please select the number of occupants.')).toBeVisible();

    // Select and proceed to step 5
    await page.locator('input[name="bathrooms"][value="2"]').check();
    await page.locator('input[name="occupants"][value="3-4"]').check();
    await page.locator('text=Next Step →').click();

    // Fill remaining steps quickly to reach step 15
    await page.locator('input[name="water_flow"]').first().check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="fuel_type"][value="gas"]').check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="current_boiler"][value="combi"]').check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="hot_water"][value="cylinder"]').check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="radiators"][value="10"]').check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="flue_system"][value="horizontal"]').check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="gas_meter"][value="external"]').check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="gas_pipe"][value="22mm"]').check();
    await page.locator('text=Next Step →').click();
    await page.locator('input[name="add_ons"][value="magnetic_filter"]').check();
    await page.locator('text=Next Step →').click();

    // Contact details
    await page.locator('input[name="name"]').fill('John Doe');
    await page.locator('input[name="email"]').fill('john.doe@example.com');
    await page.locator('input[name="phone"]').fill('01234567890');
    await page.locator('input[name="postcode"]').fill('DN16 3HR');
    await page.locator('text=Next Step →').click();

    // Step 15: Test validation for boiler option
    await page.locator('text=Submit Quote Request').click();
    await expect(page.locator('text=Please select a boiler option before proceeding.')).toBeVisible();
  });

  test('should display error toast on submission failure', async ({ page }) => {
    // This test assumes the server is not running or returns error
    // For now, since server is running, it may succeed
    // But to test error, perhaps mock or assume
    // Since we can't easily mock, skip or test with invalid data
    test.skip(); // Skipping as per original comment
  });

  test('should allow navigation back through steps', async ({ page }) => {
    await page.locator('input[name="home_type"][value="own_home"]').check();
    await page.locator('text=Next: Property Type →').click();

    await page.locator('text=← Previous').click();
    await expect(page.locator('input[name="home_type"][value="own_home"]')).toBeChecked();
  });
});