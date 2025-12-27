# Comprehensive Guide: Setting Up and Submitting a Sitemap to Google Search Console for Nimbus Boilers Website

This guide provides step-by-step instructions for creating a sitemap.xml file for your React-based Nimbus Boilers website, adding it to the public folder, verifying your website in Google Search Console, and submitting the sitemap. The guide includes best practices for SEO and descriptions of screenshots where applicable.

## Prerequisites

- Your website is deployed and accessible at `https://client-three-rho-12.vercel.app`
- You have a Google account
- Basic understanding of React routing and XML

## Step 1: Creating the Sitemap.xml File

A sitemap.xml file helps search engines like Google discover and index your website's pages. For a React app using React Router, you can create the sitemap manually or use a library like `react-router-sitemap`.

### Option 1: Manual Creation (Recommended for Small Sites)

1. Identify all your website's routes by examining your `App.js` file. For Nimbus Boilers, the routes are:
   - `/` (Home page)
   - `/quote` (Quote form)
   - `/faq` (Frequently Asked Questions)
   - `/areas` (Areas covered)
   - `/blog` (Blog)

2. Create a new file named `sitemap.xml` in your `client/public/` directory.

3. Add the following XML content to the file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://client-three-rho-12.vercel.app/</loc>
    <lastmod>2025-12-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://client-three-rho-12.vercel.app/quote</loc>
    <lastmod>2025-12-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://client-three-rho-12.vercel.app/faq</loc>
    <lastmod>2025-12-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://client-three-rho-12.vercel.app/areas</loc>
    <lastmod>2025-12-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://client-three-rho-12.vercel.app/blog</loc>
    <lastmod>2025-12-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

**Screenshot Description:** The sitemap.xml file open in your code editor, showing the XML structure with URLs, last modification dates, change frequencies, and priorities.

### Option 2: Using react-router-sitemap Library

If your site grows or you prefer automation:

1. Install the package:
   ```bash
   npm install react-router-sitemap
   ```

2. Create a `sitemap-builder.js` file in your project root:

```javascript
require('babel-register');

const router = require('./client/src/App').default; // Adjust path as needed
const Sitemap = require('react-router-sitemap').default;

const paths = [
  '/',
  '/quote',
  '/faq',
  '/areas',
  '/blog'
];

const hostname = 'https://client-three-rho-12.vercel.app';

const sitemap = new Sitemap(router)
  .applyParams(paths)
  .build(hostname)
  .save('./client/public/sitemap.xml');
```

3. Run the script:
   ```bash
   node sitemap-builder.js
   ```

**Best Practice:** Update the `lastmod` date whenever you make significant changes to a page. Use appropriate `changefreq` values (e.g., weekly for home/blog, monthly for static content). Set priorities based on page importance (home = 1.0, secondary pages lower).

## Step 2: Adding the Sitemap to the Public Folder

1. Ensure the `sitemap.xml` file is placed in the `client/public/` directory. This makes it accessible at `https://client-three-rho-12.vercel.app/sitemap.xml`.

2. Update your `robots.txt` file (located in `client/public/`) to reference the sitemap:

```
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

Sitemap: https://client-three-rho-12.vercel.app/sitemap.xml
```

**Screenshot Description:** File explorer showing the sitemap.xml and updated robots.txt files in the public folder.

**Best Practice:** Always include a reference to your sitemap in robots.txt. This helps search engines discover it automatically.

## Step 3: Verifying Your Website in Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console) and sign in with your Google account.

2. Click "Add Property" and select "URL prefix".

3. Enter your website URL: `https://client-three-rho-12.vercel.app`

4. Choose your verification method. For a Vercel-deployed site, the recommended method is "HTML tag":
   - Copy the meta tag provided by Google.
   - Add it to your `client/public/index.html` file in the `<head>` section.

5. Click "Verify" in Google Search Console.

**Screenshot Description:** Google Search Console property addition screen with URL prefix selected and verification method chosen.

**Best Practice:** Use the HTML tag verification method for static sites. If you have access to your DNS settings, domain verification is more permanent.

## Step 4: Submitting the Sitemap

1. Once verified, go to your property in Google Search Console.

2. In the left sidebar, click "Sitemaps" under "Indexing".

3. In the "Add a new sitemap" field, enter `sitemap.xml` (or the full URL if needed).

4. Click "Submit".

**Screenshot Description:** Google Search Console sitemaps page with the sitemap submission form and success message.

**Best Practice:** After submission, monitor the sitemap status. It may take a few days for Google to process and index your pages. Check for any errors and resubmit if necessary.

## SEO Best Practices

1. **Keep your sitemap updated:** Update `lastmod` dates when content changes significantly.

2. **Limit sitemap size:** Keep under 50,000 URLs per sitemap. For larger sites, use sitemap indexes.

3. **Use proper priorities:** Home page should have the highest priority (1.0), followed by important pages.

4. **Include only indexable pages:** Don't include pages blocked by robots.txt or requiring authentication.

5. **Submit to other search engines:** While focused on Google, consider submitting to Bing Webmaster Tools as well.

6. **Monitor performance:** Use Google Search Console to track indexing status and fix any crawl errors.

## Troubleshooting

- **Sitemap not found:** Ensure the file is in the public folder and accessible via the URL.
- **Verification failed:** Double-check the HTML tag is correctly placed in index.html.
- **Indexing issues:** Check for crawl errors in Google Search Console and ensure pages are not blocked by robots.txt.

## Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap Protocol](https://www.sitemaps.org/protocol.html)
- [React Router Sitemap Documentation](https://www.npmjs.com/package/react-router-sitemap)

By following this guide, your Nimbus Boilers website will be properly indexed by Google, improving its visibility in search results.