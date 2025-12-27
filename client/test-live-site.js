const puppeteer = require('puppeteer');

async function testLiveSite() {
  const url = 'https://client-three-rho-12.vercel.app';
  let browser;
  let issues = [];

  try {
    console.log('Launching browser...');
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({ width: 1280, height: 800 });

    // Test home page load
    console.log('Testing home page load...');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    const title = await page.title();
    console.log('Page title:', title);
    if (!title.includes('Nimbus')) {
      issues.push('Home page title does not contain "Nimbus"');
    }

    // Check if page loaded
    const bodyText = await page.evaluate(() => document.body.innerText);
    if (bodyText.includes('Login') || bodyText.includes('Vercel')) {
      issues.push('Site requires login - not accessible without authentication');
    } else if (bodyText.length < 100) {
      issues.push('Home page content seems too short');
    }

    // Test map display
    console.log('Testing map display...');
    await page.goto(`${url}/areas`, { waitUntil: 'networkidle2', timeout: 60000 });
    const mapExists = await page.evaluate(() => {
      return !!document.querySelector('.map-container') || !!document.querySelector('[class*="map"]');
    });
    if (!mapExists) {
      issues.push('Map not found on /areas page');
    }

    // Test quote form submission
    console.log('Testing quote form...');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    // Find the quote form
    const formExists = await page.evaluate(() => {
      return !!document.querySelector('#bqf-fullpaste') || !!document.querySelector('form');
    });
    if (!formExists) {
      issues.push('Quote form not found on home page');
    } else {
      // Try to fill a simple form field
      try {
        await page.type('input[name="name"]', 'Test User', { delay: 100 });
        console.log('Successfully typed in form field');
      } catch (e) {
        issues.push('Could not interact with form fields: ' + e.message);
      }
    }

    // Test chat functionality
    console.log('Testing chat functionality...');
    const chatExists = await page.evaluate(() => {
      return !!document.querySelector('.fixed.bottom-4.right-4') || !!document.querySelector('[class*="chat"]');
    });
    if (!chatExists) {
      issues.push('Chat widget not found');
    }

    // Test analytics tracking
    console.log('Testing analytics tracking...');
    const gaLoaded = await page.evaluate(() => {
      return typeof window.gtag !== 'undefined' || typeof window.ga !== 'undefined';
    });
    if (!gaLoaded) {
      issues.push('Google Analytics not loaded');
    }

    // Check for errors in console
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    await page.waitForTimeout(2000); // Wait a bit for any errors
    if (errors.length > 0) {
      issues.push('Console errors: ' + errors.join('; '));
    }

  } catch (error) {
    issues.push('Test failed with error: ' + error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  // Summary
  console.log('\n=== VERIFICATION SUMMARY ===');
  console.log('Live site URL:', url);
  console.log('Test completed at:', new Date().toISOString());

  if (issues.length === 0) {
    console.log('✅ All tests passed! Site is accessible and functional.');
  } else {
    console.log('❌ Issues found:');
    issues.forEach(issue => console.log('  -', issue));
  }

  return issues;
}

testLiveSite().catch(console.error);