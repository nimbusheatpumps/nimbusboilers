const { test, expect } = require('@playwright/test');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

/**
 * Launches Chrome with given args and returns the port.
 */
async function launchChromeAndRunLh(url, opts, config = null) {
  const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags });
  opts.port = chrome.port;
  const flags = config ? { logLevel: 'info', output: 'html', port: chrome.port } : { logLevel: 'info', output: 'json', port: chrome.port };
  const results = await lighthouse(url, flags, config);
  await chrome.kill();
  return results.lhr;
}

test.describe('Lighthouse Audits', () => {
  test('Home page performance targets', async ({ browser }) => {
    const opts = {
      onlyCategories: ['performance', 'accessibility', 'seo'],
      chromeFlags: ['--no-sandbox']
    };
    const config = {
      extends: 'lighthouse:default',
      settings: {
        formFactor: 'mobile',
        screenEmulation: { mobile: true, width: 375, height: 667, deviceScaleFactor: 0, disabled: false },
        throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1, requestLatencyMs: 0 },
        onlyCategories: ['performance']
      }
    };
    const lhr = await launchChromeAndRunLh('http://localhost:3001/', opts, config);
    expect(lhr.categories.performance.score).toBeGreaterThanOrEqual(0.9);
  });

  test('Accessibility targets', async ({ browser }) => {
    // Similar for acc, expect 1.0
    const opts = { onlyCategories: ['accessibility'] };
    const lhr = await launchChromeAndRunLh('http://localhost:3001/', opts);
    expect(lhr.categories.accessibility.score).toBe(1);
  });

  test('SEO targets', async ({ browser }) => {
    const opts = { onlyCategories: ['seo'] };
    const lhr = await launchChromeAndRunLh('http://localhost:3001/', opts);
    expect(lhr.categories.seo.score).toBe(1);
  });
});
