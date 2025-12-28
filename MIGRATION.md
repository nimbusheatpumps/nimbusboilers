# Nimbus Boilers Migration Guide

This guide provides detailed, actionable steps to migrate the existing static HTML site in [`existingnimbus/`](existingnimbus/) to the new React app deployed on Vercel. The goal is to preserve SEO rankings for keywords like "boiler installation Scunthorpe" with zero loss. Staging is live at [https://nimbusboilers-scunthorpe.vercel.app](https://nimbusboilers-scunthorpe.vercel.app).

**Warnings:**
- Test all redirects on staging before production.
- Backup DNS records before changes.
- Monitor GSC for 24-48 hours post-migration for crawl errors.
- Ensure React app handles client-side routing correctly (use Vercel rewrites).
- Downtime risk: Schedule during low-traffic hours.

## Recent Fixes & Optimizations (2025-12-28)
- Testimonials in [`Home.js`](client/src/components/Home.js)/[`Testimonials.js`](client/src/components/Testimonials.js): ONLY real Google reviews (Audrey Lal: positive note; Dean Bonner: "Excellent service..."). Review schema added.
- SEO pages verified (priority, grants/FAQs/schema/ARIA/keywords): [`GasBoilerInstallationScunthorpe.js`](client/src/components/GasBoilerInstallationScunthorpe.js), [`GasBoilerServiceScunthorpe.js`](client/src/components/GasBoilerServiceScunthorpe.js), [`GasBoilerServiceNorthLincolnshire.js`](client/src/components/GasBoilerServiceNorthLincolnshire.js), [`BoilerRepairScunthorpe.js`](client/src/components/BoilerRepairScunthorpe.js).
- Enhanced [`GasSafeBoilerInstallersScunthorpe.js`](client/src/components/GasSafeBoilerInstallersScunthorpe.js): certifications, safety tips, keywords.
- Canonical tags: react-helmet-async in [`App.js`](client/src/App.js).
- Tests: [`testimonials-home.spec.js`](client/tests/testimonials-home.spec.js), [`seo-pages.spec.js`](client/tests/seo-pages.spec.js).
- Lighthouse local: SEO 100%, Accessibility 97%.
- Deployed staging: [https://nimbusboilers-scunthorpe.vercel.app](https://nimbusboilers-scunthorpe.vercel.app) (Vercel preview).
## Migration Checklist

| Page/Feature | Old HTML (existingnimbus/) | New Component/Route | Status | Notes/Tests |
|--------------|----------------------------|---------------------|--------|-------------|
| Homepage | [`Homepage.html`](existingnimbus/Homepage.html) | [`Home.js`](client/src/components/Home.js) `/` | ✅ | Real testimonials [`testimonials-home.spec.js`](client/tests/testimonials-home.spec.js), Review schema |
| Quote Form | [`BoilerInstantQuote.html`](existingnimbus/BoilerInstantQuote.html) | [`QuoteForm.js`](client/src/components/QuoteForm.js) `/quote` | ✅ |  |
| Areas Covered | [`AreasCovered.html`](existingnimbus/AreasCovered.html) | [`AreasCovered.js`](client/src/components/AreasCovered.js) `/areas` | ✅ |  |
| FAQ | [`HeatPumpFAQ.html`](existingnimbus/HeatPumpFAQ.html) | [`FAQ.js`](client/src/components/FAQ.js) `/faq` | ✅ |  |
| Schema | [`HeaderSchema.html`](existingnimbus/HeaderSchema.html) | [`App.js`](client/src/App.js) | ✅ | Canonical tags via react-helmet-async |
| Gas Boiler Installation Scunthorpe | N/A | [`GasBoilerInstallationScunthorpe.js`](client/src/components/GasBoilerInstallationScunthorpe.js) `/gas-boiler-installation-scunthorpe` | ✅ Verified | priority, grants/FAQs/schema/ARIA/keywords [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) |
| Gas Boiler Service Scunthorpe | N/A | [`GasBoilerServiceScunthorpe.js`](client/src/components/GasBoilerServiceScunthorpe.js) `/gas-boiler-service-scunthorpe` | ✅ Verified |  |
| Gas Boiler Service North Lincolnshire | N/A | [`GasBoilerServiceNorthLincolnshire.js`](client/src/components/GasBoilerServiceNorthLincolnshire.js) `/gas-boiler-service-north-lincolnshire` | ✅ Verified |  |
| Boiler Repair Scunthorpe | N/A | [`BoilerRepairScunthorpe.js`](client/src/components/BoilerRepairScunthorpe.js) `/boiler-repair-scunthorpe` | ✅ Verified |  |
| Gas Safe Boiler Installers Scunthorpe | N/A | [`GasSafeBoilerInstallersScunthorpe.js`](client/src/components/GasSafeBoilerInstallersScunthorpe.js) `/gas-safe-boiler-installers-scunthorpe` | ✅ Enhanced | certifications, safety tips, keywords |
| Lighthouse Scores | N/A | Local | ✅ | SEO 100%, Accessibility 97% |
| Staging Deploy | N/A | Vercel preview | ✅ | [https://nimbusboilers-scunthorpe.vercel.app](https://nimbusboilers-scunthorpe.vercel.app) |

## 1. 301 Redirects

Map old static HTML pages to new React routes using permanent 301 redirects. Implement in [`client/vercel.json`](client/vercel.json) (create if missing).

### Checklist
- [ ] Create/update `vercel.json` in `client/` root.
- [ ] Deploy to Vercel staging and test redirects (e.g., curl -I https://client-three-rho-12.vercel.app/Homepage.html).
- [ ] Verify no redirect chains/loops.
- [ ] Push to production deployment.

### Redirect Map
| Old URL | New URL | Notes |
|---------|---------|-------|
| `/Homepage.html` | `/` | Homepage |
| `/BoilerInstantQuote.html` | `/quote` | Instant quote form ([`QuoteForm.js`](client/src/components/QuoteForm.js)) |
| `/AreasCovered.html` | `/areas` | Areas served ([`AreasCovered.js`](client/src/components/AreasCovered.js)) |
| `/HeatPumpFAQ.html` | `/faq` | FAQ section ([`FAQ.js`](client/src/components/FAQ.js)) |
| `/HeaderSchema.html` | `/` | Schema markup (redirect to home) |
### vercel.json Example
```json
{
  "redirects": [
    { "source": "/Homepage.html", "destination": "/", "permanent": true },
    { "source": "/BoilerInstantQuote.html", "destination": "/quote", "permanent": true },
    { "source": "/AreasCovered.html", "destination": "/areas", "permanent": true },
    { "source": "/HeatPumpFAQ.html", "destination": "/faq", "permanent": true },
    { "source": "/HeaderSchema.html", "destination": "/", "permanent": true }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
**Note:** Add more redirects if additional static files exist. Use `/**` for catch-all if needed.

## 2. DNS Configuration

Point domain (e.g., nimbusboilers.co.uk) to Vercel. Use staging URL for testing: [https://client-three-rho-12.vercel.app](https://client-three-rho-12.vercel.app).

### Checklist
- [ ] Add custom domain to Vercel project dashboard.
- [ ] Update DNS provider (e.g., GoDaddy, Cloudflare).
- [ ] Verify propagation (use `dig` or whatsmyDns.net).
- [ ] Test HTTPS/SSL (Vercel auto-provisions).

### Steps for Apex Domain (root domain)
1. **A Record:** `@` → `76.76.21.21`
2. **AAAA Records (IPv6):**
   - `@` → `2606:4700:60::21`
   - `@` → `2606:4700:60::20`
   - `@` → `2606:4700:60::18`
3. **www CNAME:** `www` → `cname.vercel-dns.com`

**Alternative (Recommended):** Delegate NS to Vercel:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

**Warnings:** TTL=300s for fast propagation. Avoid mixing A/CNAME.

## 3. Google Search Console (GSC)

Update for new site structure without SEO loss.

### Checklist
- [ ] Verify same domain property (or add www/non-www).
- [ ] Submit new sitemap.
- [ ] Request indexing for key pages.
- [ ] Monitor Coverage/Usability reports.

### Steps
1. Log in to [GSC](https://search.google.com/search-console).
2. Select property (e.g., `https://nimbusboilers.co.uk/`).
3. **Sitemaps:** Submit [`client/public/sitemap.xml`](client/public/sitemap.xml) → `/sitemap.xml`.
4. **URL Inspection:** Enter key URLs (e.g., `/`, `/quote`), "Request Indexing".
5. **Removals:** Clear old `/Homepage.html` if indexed (temporary).

**Warnings:** Changes take 24-72 hours. Use "Live Test" for indexing status.

## 4. Monitoring & Validation

Post-migration checks.

### Checklist
- [ ] GA4: Compare traffic pre/post (no drop >10%).
- [ ] GSC: Zero new errors, impressions stable.
- [ ] Lighthouse: SEO score ≥90 ([`lighthouse-seo-only.json`](lighthouse-seo-only.json)).
- [ ] Rankings: Track "boiler installation Scunthorpe" (use SEMrush/Ahrefs).
- [ ] Uptime: 100% on Vercel dashboard.

### Tools
- Run Lighthouse: `npx lighthouse https://yourdomain.com/ --output=json --only-categories=seo`
- GA: Custom reports for /quote conversions.
- Hotjar/Screencast for UX issues.

**Success Criteria:** Traffic/rankings stable after 7 days.

## Rollback Plan
- Revert DNS to old host.
- Remove vercel.json redirects.
- Submit old sitemap to GSC.

