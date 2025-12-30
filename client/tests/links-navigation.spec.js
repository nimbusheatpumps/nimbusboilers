const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const pages = [
  '/',
  '/quote',
  '/faq',
  '/areas',
  '/areas-covered',
  '/blog',
  '/contact',
  '/gas-boiler-service-scunthorpe',
  '/gas-boiler-installation-scunthorpe',
  '/gas-boiler-service-north-lincolnshire',
  '/gas-boiler-repair-scunthorpe',
  '/gas-boiler-breakdown-scunthorpe',
  '/boiler-maintenance-tips',
  '/gas-safe-boiler-installers-scunthorpe',
  '/boiler-grants-scunthorpe',
  '/gas-boiler-servicing-scunthorpe',
  '/gas-boiler-replacement-scunthorpe',
  '/gas-boiler-brands-scunthorpe',
  '/boiler-finance-scunthorpe',
  '/combi-boiler-installation-scunthorpe'
];

async function testLinksNavigation(port, results) {
  const baseUrl = `http://localhost:${port}`;
  const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
  const clientPage = await browser.newPage();
  clientPage.setViewport({ width: 1280, height: 800 });

  let internalLinks = new Set();

  // Page loads and link extraction
  for (const pagePath of pages) {
    let consoleErrors = [];
    let networkErrors = [];
    const url = `${baseUrl}${pagePath}`;

    console.log(`\n🔍 Loading page: ${url}`);

    clientPage.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    clientPage.on('response', (response) => {
      if (response.status() >= 400) {
        networkErrors.push(`${response.status()} - ${response.url()}`);
      }
    });

    try {
      const response = await clientPage.goto(url, { waitUntil: 'networkidle2', timeout: 40000 });
      if (!response.ok()) {
        throw new Error(`HTTP ${response.status()}`);
      }

      results.pages[`${port}${pagePath}`] = 'PASS';

      // Check errors
      if (consoleErrors.length > 0) {
        results.fails.push(`Console errors on ${pagePath}: ${consoleErrors.slice(0,3).join('; ')}`);
      }
      if (networkErrors.length > 0) {
        results.fails.push(`Network errors on ${pagePath}: ${networkErrors.slice(0,3).join('; ')}`);
      }

      // Extract internal links
      const hrefs = await clientPage.evaluate(() => {
        return Array.from(document.querySelectorAll('a[href]'), (a) => a.getAttribute('href')).filter(Boolean);
      });

      for (const href of hrefs) {
        if (href && (href.startsWith('/') || href.startsWith(baseUrl))) {
          const parsedPath = new URL(href, baseUrl).pathname;
          internalLinks.add(parsedPath);
        } else if (href && href.startsWith('http') && !href.includes('localhost')) {
          try {
            new URL(href);
          } catch {
            results.fails.push(`Invalid external link on ${pagePath}: ${href}`);
          }
        }
      }

    } catch (error) {
      results.fails.push(`Page FAIL ${pagePath}: ${error.message}`);
      results.pages[`${port}${pagePath}`] = 'FAIL';
      await clientPage.screenshot({ path: `${screenshotsDir}/${port}-page-${pagePath.replace(/[^a-z0-9]/gi, '_')}.png`, fullPage: true });
    }
  }

  // Test all unique internal links
  let linkChecks = 0;
  let linkPasses = 0;
  for (const linkPath of Array.from(internalLinks)) {
    const url = `${baseUrl}${linkPath}`;
    linkChecks++;
    console.log(`🔗 Checking internal link: ${linkPath}`);

    let consoleErrors = [];
    let networkErrors = [];

    clientPage.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    clientPage.on('response', (response) => {
      if (response.status() >= 400) {
        networkErrors.push(`${response.status()} - ${response.url()}`);
      }
    });

    try {
      await clientPage.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      linkPasses++;

      if (consoleErrors.length > 0) {
        results.fails.push(`Console errors on link ${linkPath}: ${consoleErrors.slice(0,3).join('; ')}`);
      }
      if (networkErrors.length > 0) {
        results.fails.push(`Network errors on link ${linkPath}: ${networkErrors.slice(0,3).join('; ')}`);
      }

    } catch (error) {
      results.fails.push(`Link FAIL ${linkPath}: ${error.message}`);
      await clientPage.screenshot({ path: `${screenshotsDir}/${port}-link-${linkPath.replace(/[^a-z0-9]/gi, '_')}.png`, fullPage: true });
    }
  }

  results.passes = linkPasses;
  results.totalChecked = linkChecks;
  results.internalLinksFound = internalLinks.size;

  await browser.close();
}

describe('Links Navigation Test', () => {
  test('Test all links/buttons on dev (3000) and build (3001)', async () => {
    const devResults = { pages: {}, fails: [], passes: 0, totalChecked: 0, internalLinksFound: 0 };
    const buildResults = { pages: {}, fails: [], passes: 0, totalChecked: 0, internalLinksFound: 0 };

    await testLinksNavigation(3000, devResults);
    await testLinksNavigation(3001, buildResults);

    const results = {
      pages: { ...devResults.pages, ...buildResults.pages },
      fails: [...devResults.fails, ...buildResults.fails],
      totalChecked: devResults.totalChecked + buildResults.totalChecked,
      passes: devResults.passes + buildResults.passes,
      internalLinksFound: devResults.internalLinksFound + buildResults.internalLinksFound,
      dev: devResults,
      build: buildResults,
      date: new Date().toISOString()
    };

    // Write log
    const logPath = path.join(__dirname, '..', 'LINKS-TEST-LOG.md');
    let logContent = `# Links/Buttons Testing Results\\n\\n`;
    logContent += `**Run at:** ${results.date}\\n\\n`;
    logContent += `**Pages tested:** ${pages.length * 2} (dev + build)\\n`;
    logContent += `**Total unique internal links checked:** ${results.totalChecked}\\n`;
    logContent += `**Successful navigations:** ${results.passes}\\n`;
    logContent += `**Failures:** ${results.fails.length}\\n\\n`;

    logContent += `## Dev Server (localhost:3000)\\n`;
    logContent += `- Pages loaded: ${Object.keys(devResults.pages).length}\\n`;
    logContent += `- Internal links found: ${devResults.internalLinksFound}\\n`;
    logContent += `- Links checked: ${devResults.totalChecked}\\n`;
    logContent += `- Passes: ${devResults.passes}\\n`;
    if (devResults.fails.length > 0) {
      logContent += `\\n### Dev Fails:\\n` + devResults.fails.map((f, i) => `${i+1}. ${f}`).join('\\n') + '\\n';
    } else {
      logContent += `- **No failures!**\\n`;
    }

    logContent += `\\n## Build Server (localhost:3001)\\n`;
    logContent += `- Pages loaded: ${Object.keys(buildResults.pages).length}\\n`;
    logContent += `- Internal links found: ${buildResults.internalLinksFound}\\n`;
    logContent += `- Links checked: ${buildResults.totalChecked}\\n`;
    logContent += `- Passes: ${buildResults.passes}\\n`;
    if (buildResults.fails.length > 0) {
      logContent += `\\n### Build Fails:\\n` + buildResults.fails.map((f, i) => `${i+1}. ${f}`).join('\\n') + '\\n';
    } else {
      logContent += `- **No failures!**\\n`;
    }

    logContent += `\\n## Screenshots\\n`;
    logContent += `Screenshots for failures saved in \`client/tests/screenshots/\`\\n\\n`;
    logContent += `**Summary:** All links/buttons navigation verified. No 404s or errors unless listed.\\n`;

    fs.writeFileSync(logPath, logContent);

    console.log(`\\n📄 Detailed log saved to ${logPath}`);
    console.log(`\\n📸 Screenshots (if any fails): ${screenshotsDir}`);
    console.log(`\\n✅ Testing complete. Total fails: ${results.fails.length}`);

    // Jest assertion
    expect(results.fails).toHaveLength(0);
  }, 1800000); // 30 min timeout
});