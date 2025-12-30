import { test, expect } from '@playwright/test';

test.describe('Contact Form (Feedback Form)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/contact');
  });

  test('happy path: submit valid feedback form', async ({ page }) => {
    let requestBody;
    await page.route('http://localhost:5000/api/feedback', async (route) => {
      requestBody = route.request().postDataJSON();
      await route.continue();
    });

    await expect(page.locator('h1:has-text("Customer Feedback")')).toBeVisible();

    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.selectOption('#rating', '5');
    await page.fill('#review', 'Test submission');

    await Promise.all([
      page.waitForResponse(resp => resp.url().includes('/api/feedback') && resp.status() === 200),
      page.click('button[type="submit"]')
    ]);

    await expect(page.locator('text=Feedback submitted successfully!')).toBeVisible();
    expect(requestBody).toMatchObject({
      name: 'Test User',
      email: 'test@example.com',
      rating: 5,
      review: 'Test submission'
    });
  });

  test('error: submit without required fields', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('#name:invalid')).toBeVisible();
    await expect(page.locator('#email:invalid')).toBeVisible();
    await expect(page.locator('#review:invalid')).toBeVisible();
  });

  test('error: invalid email', async ({ page }) => {
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'invalid-email');
    await page.selectOption('#rating', '5');
    await page.fill('#review', 'Test');
    await page.click('button[type="submit"]');
    await expect(page.locator('#email:invalid')).toBeVisible();
  });
});