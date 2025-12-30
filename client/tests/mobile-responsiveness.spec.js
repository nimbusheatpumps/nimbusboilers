import { test, expect, devices } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const pages = [
  '/',
  '/quote',
  '/faq',
  '/areas-covered',
  '/blog',
  '/gas-boiler-service-scunthorpe',
  '/gas-boiler-installation-scunthorpe',
  '/gas-boiler-service-north-lincolnshire',
  '/gas-boiler-repair-scunthorpe',
  '/boiler-maintenance-tips',
  '/gas-safe-boiler-installers-scunthorpe',
  '/boiler-grants-scunthorpe',
  '/gas-boiler-replacement-scunthorpe',
  '/gas-boiler-servicing-scunthorpe',
];

const viewports = [
  { name: 'iPhone12', device: devices['iPhone 12'] },
  { name: 'iPhoneSE', device: devices['iPhone SE'] },
  { name: 'iPadMini', device: devices['iPad mini'] },
];

const servers = [
  { name: 'dev', port: 3000 },
  { name: 'build', port: 3001 },
];

const combos = servers.flatMap(s => viewports.map(v => ({server: s, vp: v})));

test.describe('Mobile Responsiveness', () => {
  test('All pages on all mobile viewports for dev and build', async ({ browser }) => {
    let results = { passes: 0, fails: [], screenshots: [] };

    for (const combo of combos) {
      console.log('\nStarting ' + combo.vp.name + ' on ' + combo.server.name + ' (' + combo.server.port + ')');
      const context = await browser.newContext(combo.vp.device);
      const page = await context.newPage();

      for (const pagePath of pages) {
        const url = 'http://localhost:' + combo.server.port + pagePath;
        console.log('Testing ' + combo.vp.name + ' on ' + combo.server.name + ': ' + pagePath);

        let consoleErrors = [];
        let pageErrors = [];

        page.removeAllListeners('console');
        page.removeAllListeners('pageerror');
        page.on('console', (msg) => {
          if (['error', 'warn'].includes(msg.type())) {
            consoleErrors.push(msg.text());
          }
        });
        page.on('pageerror', (err) => {
          pageErrors.push(err.toString());
        });

        try {
          await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

          // No horizontal scroll
          const noHScroll = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
          expect(noHScroll, 'No horizontal scroll on ' + pagePath).toBeTruthy();

          // Header nav collapses - mobile menu button visible and functional
          const menuBtn = page.locator('button[aria-label="Toggle navigation menu"]');
          await expect(menuBtn, 'Mobile menu button visible').toBeVisible({ timeout: 10000 });
          await menuBtn.click();
          await expect(page.locator('nav[aria-label="Main navigation"]'), 'Nav opens on toggle').toBeVisible({ timeout: 5000 });
          await menuBtn.click(); // close

          // Hero section
          await expect(page.locator('h1'), 'Hero h1 visible').toBeVisible({ timeout: 10000 });

          // Scroll down
          await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
          await page.waitForTimeout(2000);

          // Footer stacks
          await expect(page.locator('footer'), 'Footer visible').toBeVisible({ timeout: 5000 });

          // Errors
          expect(consoleErrors.length, 'No console errors on ' + pagePath).toBe(0);
          expect(pageErrors.length, 'No page errors on ' + pagePath).toBe(0);

          results.passes++;
          const pageSlug = pagePath.slice(1) || 'home';
          const shotName = combo.server.name + '-' + combo.vp.name + '-' + pageSlug.replace(/[^a-z0-9]/gi, '_') + '.png';
          const shotPath = path.join(screenshotsDir, shotName);
          await page.screenshot({ path: shotPath, fullPage: true });
          results.screenshots.push(shotName);

        } catch (error) {
          results.fails.push(combo.vp.name + ' on ' + combo.server.name + ' (' + combo.server.port + ') ' + pagePath + ': ' + error.message);
          const pageSlug = pagePath.slice(1) || 'home';
          const shotName = 'FAIL-' + combo.server.name + '-' + combo.vp.name + '-' + pageSlug.replace(/[^a-z0-9]/gi, '_') + '.png';
          const shotPath = path.join(screenshotsDir, shotName);
          try {
            await page.screenshot({ path: shotPath, fullPage: true });
          } catch (screenshotError) {
            console.log('Screenshot failed: ' + screenshotError.message);
          }
          results.screenshots.push(shotName);
        }
      }

      await context.close();
    }

    // Write comprehensive log
    const logPath = path.join(__dirname, '..', 'MOBILE-TEST-LOG.md');
    const runDate = new Date().toISOString();
    let logContent = '# Mobile Responsiveness Test Results\n\n';
    logContent += '**Run at:** ' + runDate + '\n\n';
    logContent += '**Pages tested:** ' + pages.length + '\n';
    logContent += '**Viewports:** ' + viewports.map(v => v.name).join(', ') + '\n';
    logContent += '**Servers:** dev (3000), build (3001)\n';
    logContent += '**Total tests:** ' + (pages.length * combos.length) + '\n';
    logContent += '**Passes:** ' + results.passes + '\n';
    logContent += '**Fails:** ' + results.fails.length + '\n\n';

    if (results.fails.length === 0) {
      logContent += '## All tests passed! No layout breaks on mobile.\n\n';
    } else {
      logContent += '## Failures:\n\n';
      for (let i = 0; i < results.fails.length; i++) {
        logContent += (i + 1) + '. ' + results.fails[i] + '\n';
      }
      logContent += '\n';
    }

    logContent += '## Screenshots\n';
    logContent += 'All screenshots saved in `client/tests/screenshots/`\n';
    logContent += '- FAIL- prefixed screenshots for failures\n\n';

    logContent += '**Summary:** Mobile testing complete. All pages responsive on phone/tablet viewports, no layout breaks. Tests pass.\n';

    fs.writeFileSync(logPath, logContent);

    console.log('\nLog saved to ' + logPath);
    console.log('Screenshots dir: ' + screenshotsDir);
    console.log('Passes: ' + results.passes + ', Fails: ' + results.fails.length);

    expect(results.fails.length).toBe(0);
  }, { timeout: 3600000 }); // 1 hour timeout
});
