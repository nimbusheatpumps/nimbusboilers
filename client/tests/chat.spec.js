import { test, expect } from '@playwright/test';

test.describe('Chat Widget: Send message on desktop and mobile, verify receipt', () => {
  const testMessage = 'Test message from Playwright at ' + new Date().toISOString();

  test('Desktop: goto home, send chat message, verify appears (success indicator)', async ({ page }) => {
    await page.goto('http://localhost:3001');
    
    // Wait for chat to load
    await expect(page.locator('h3:has-text("Live Chat")')).toBeVisible({ timeout: 10000 });
    
    // Locate input and send message
    const input = page.locator('input[placeholder="Type a message..."]');
    await input.fill(testMessage);
    await page.locator('button:has-text("Send")').click();
    
    // Wait and verify message appears in chat (success indicator)
    await page.waitForSelector(`text=${testMessage}`, { timeout: 5000 });
    await expect(page.locator(`text=${testMessage}`)).toBeVisible();
    
    // Verify input cleared
    await expect(input).toHaveValue('');
  });

  test('Mobile (iPhone 12): goto home, send chat message, verify appears', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1'
    });
    const page = await context.newPage();

    await page.goto('http://localhost:3001');
    
    // Wait for chat to load (may need scroll or wait)
    await expect(page.locator('h3:has-text("Live Chat")')).toBeVisible({ timeout: 10000 });
    
    // Scroll to bottom right if needed, but fixed
    await page.waitForTimeout(1000);
    
    // Locate input and send message
    const input = page.locator('input[placeholder="Type a message..."]');
    await input.fill(testMessage);
    await page.locator('button:has-text("Send")').click();
    
    // Wait and verify message appears
    await page.waitForSelector(`text=${testMessage}`, { timeout: 5000 });
    await expect(page.locator(`text=${testMessage}`)).toBeVisible();
    
    // Verify input cleared
    await expect(input).toHaveValue('');

    await context.close();
  });
});