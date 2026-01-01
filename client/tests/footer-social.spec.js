import { test, expect } from '@playwright/test';

test.describe('Footer Social Links Verification', () => {
  const baseUrls = [
    { name: 'Dev', url: 'http://localhost:3000' },
    { name: 'Build', url: 'http://localhost:3001' },
    { name: 'Preview', url: 'https://client-9ytetttow-brys-projects-4db70d78.vercel.app' }
  ];

  const testPages = [
    { path: '/', name: 'Home' }
  ];

  for (const server of baseUrls) {
    test.describe(`On ${server.name} server`, () => {
      for (const pageInfo of testPages) {
        test(`Verify X (Twitter) link in footer on ${pageInfo.name} page`, async ({ page }) => {
          await page.goto(`${server.url}${pageInfo.path}`);
          await expect(page).toHaveURL(`${server.url}${pageInfo.path}`);

          // Footer X link
          const xLink = page.locator('footer a[href="https://x.com/NimbusHeatPumps"]');
          await expect(xLink).toHaveCount(1);
          await expect(xLink).toBeVisible({ timeout: 10000 });
          await expect(xLink).toHaveAttribute('href', 'https://x.com/NimbusHeatPumps');
          await expect(xLink).toHaveAttribute('target', '_blank');
          await expect(xLink.locator('text=@NimbusHeatPumps')).toBeVisible();
          // Icon visible
          await expect(xLink.locator('svg')).toBeVisible();

          // Gas Safe verification - correct number #966812 present, link correct
          await expect(page.locator('footer >> text="#966812"')).toBeVisible();
          await expect(page.locator('footer a[href*="search=966812"]')).toHaveAttribute('href', expect.stringContaining('search=966812'));
          await expect(page.locator('footer img[alt*="Gas Safe"]')).toBeVisible();
        });
      }
    });
  }
});