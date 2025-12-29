import { test, expect } from '@playwright/test';

test.describe('Phone Number Update Verification', () => {
  const baseUrls = [
    { name: 'Dev', url: 'http://localhost:3000' },
    { name: 'Build', url: 'http://localhost:3001' },
    { name: 'Preview', url: 'https://client-9ytetttow-brys-projects-4db70d78.vercel.app' }
  ];

  const testPages = [
    { path: '/', name: 'Home' },
    { path: '/contact', name: 'Contact' }
  ];

  const newPhoneDisplay = '01724 622069';
  const newTelHref = 'tel:01724622069';
  const oldPhoneRegexes = [
    /\\+44\\s*7487\\s*546550/i,
    /07487\\s*546550/i
  ];

  for (const server of baseUrls) {
    test.describe(`On ${server.name} server`, () => {
      for (const pageInfo of testPages) {
        test(`Verify new phone number displays correctly and no old number on ${pageInfo.name} (${pageInfo.path})`, async ({ page }) => {
          await page.goto(`${server.url}${pageInfo.path}`);
          await expect(page).toHaveURL(new RegExp(`${pageInfo.path.replace('/', '\\/')}\\$`));

          // Verify tel link href is correct and clickable
          const telLinks = page.locator(`a[href="${newTelHref}"]`);
          await expect(telLinks).toHaveCount.greaterThan(0);
          await expect(telLinks.first()).toBeVisible();

          // Verify new phone number text displays (expected on home, CTA everywhere)
          if (pageInfo.name === 'Home') {
            await expect(page.locator(`text=/${newPhoneDisplay}/i`)).toBeVisible();
          }

          // Get all visible text content excluding scripts, styles, etc.
          const visibleLocator = page.locator('body *:not(script):not(style):not(title):not meta:not link');
          const allVisibleTexts = await visibleLocator.allTextContents();
          const visibleText = allVisibleTexts.join(' ').toLowerCase();

          // Must contain new phone
          expect(visibleText).toContain(newPhoneDisplay.toLowerCase());

          // Must not contain old phones
          for (const regex of oldPhoneRegexes) {
            expect(visibleText).not.toMatch(regex);
          }
        });
      }
    });
  }
});