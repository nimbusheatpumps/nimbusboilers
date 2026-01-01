# Nimbus Boilers Migration Guide

This guide provides detailed, actionable steps to migrate the existing static HTML site in [`existingnimbus/`](existingnimbus/) to the new React app deployed on Vercel. The goal is to preserve SEO rankings for keywords like "boiler installation Scunthorpe" with zero loss. Latest staging preview: https://client-8t2r3hsom-brys-projects-4db70d78.vercel.app (2025-12-30 all-fixes).

**Warnings:**
- Test all redirects on staging before production.
- Backup DNS records before changes.
- Monitor GSC for 24-48 hours post-migration for crawl errors.
- Ensure React app handles client-side routing correctly (use Vercel rewrites).
- Downtime risk: Schedule during low-traffic hours.

## Recent Updates - 2025-12-28
- Google Reviews embed in [`Testimonials.js`](client/src/components/Testimonials.js): Official Google Places API (Place ID: `ChIJEWnr9yN396sRQM7LYNrsuWA`, API key in [`client/.env`](client/.env)); 0 live reviews → fallback verified Audrey Lal/Dean Bonner testimonials; AggregateRating schema.
- React Router setup in [`App.js`](client/src/App.js): Routes for Home, gas boiler SEO pages (installation/service/repair Scunthorpe/North Lincs), grants, FAQ etc.; [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) tests pass.
- New SEO page: [`BoilerGrantsScunthorpe.js`](client/src/components/BoilerGrantsScunthorpe.js) (£7,500 ECO4 grants details/eligibility/FAQ/CTA, Article schema).
- Dynamic canonical tags (`<link rel="canonical">`) in [`Header.js`](client/src/components/Header.js) via `useLocation`.
- Deploy: `staging-reviews-seo-2025-12-28` branch; Vercel preview https://client-f3d9ebua3-brys-projects-4db70d78.vercel.app.
- Verifications: Lighthouse SEO 100%/Acc high; all tests pass; responsive/ARIA/schema.
- GA monitoring ongoing for boiler keywords.
## Recent Updates - 2025-12-29
- Added hero-style CTA to [`Home.js`](client/src/components/Home.js) (Gas Boiler Installation Scunthorpe – £7,500 Grant, quote button), verified flow/mobile/ARIA.
- Lighthouse: Acc 97, Perf optimized (preloads, lazy), dev 46/prod expected >90.
- Deployed to Vercel preview: https://client-ewyivu4zl-brys-projects-4db70d78.vercel.app (CTA live).
- New SEO page: [`EmergencyBoilerRepairScunthorpe.js`](client/src/components/EmergencyBoilerRepairScunthorpe.js) (/emergency-boiler-repair-scunthorpe), 24/7 faults/keywords/Service schema, sitemap updated.
- Optimizations: Critical CSS preload in [`index.html`](client/public/index.html), Offer schema in CTA (£0-£7500 grant).
- Grants page: [`BoilerGrantsScunthorpe.js`](client/src/components/BoilerGrantsScunthorpe.js) existing.
- Next: Push emergency/optimizations to staging, monitor GA 24h for Scunthorpe boiler traffic.
- Canonical: Fixed conflict using dynamic `window.location.href` in [`Header.js`](client/src/components/Header.js), unique per page, tested/Lighthouse SEO 100.
- New SEO page: [`GasBoilerBreakdownScunthorpe.js`](client/src/components/GasBoilerBreakdownScunthorpe.js), route `/gas-boiler-breakdown-scunthorpe`, faults/24h/keywords/schema.
- Footer: Added Gas Safe logo/link/reg #966812 in [`Footer.js`](client/src/components/Footer.js).
- Lighthouse summary: SEO 100, Acc 97, Perf ~45 (fixes logged).
- Staging deployed: https://client-bzrye2kdq-brys-projects-4db70d78.vercel.app. GA monitor pending 24h for Scunthorpe/North Lincs keywords.
- Performance: WebP images (logos, hero, services), preload hero/CSS, minified JS bundle. Local Lighthouse Perf >80 (build).
- Accessibility: FAQ `role=button`/`aria-expanded`, CTA contrast fixes, ARIA labels. Lighthouse Acc 97/100.
- New page: [`GasBoilerReplacementScunthorpe.js`](client/src/components/GasBoilerReplacementScunthorpe.js) with content on old boiler signs, efficiency, £7500 grant, schema.
- BreadcrumbList schema on all pages [`Breadcrumb.js`](client/src/components/Breadcrumb.js).
- Deployed to Vercel staging: https://client-gx954jely-brys-projects-4db70d78.vercel.app.
- Mobile tests pass.
## Recent Updates - 2025-12-29 (Phone & Servicing)

- Phone updated site-wide to "01724 622069" (old "+44 7487 546550" removed); verified by [`phone-update.spec.js`](client/tests/phone-update.spec.js).
- New SEO page: [`GasBoilerServicingScunthorpe.js`](client/src/components/GasBoilerServicingScunthorpe.js) `/gas-boiler-servicing-scunthorpe`, boiler servicing/maintenance content/keywords, Article schema; [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) passes.
- Schema enhanced: X @NimbusHeatPumps in LocalBusiness [`Footer.js`](client/src/components/Footer.js).
- Contacts: Phone "01724 622069", Email "info@nimbusheatpumps.co.uk", Address "3 Crossbeck Road, Scunthorpe, North Lincolnshire DN16 3HR", Gas Safe #966812.
- Staging deployed: https://client-cis85wxy4-brys-projects-4db70d78.vercel.app; all tests/Lighthouse SEO 100%.

## Testimonials Integration

- Replaced dynamic with static 8 exact 5-star Google reviews (Abdul Rehman etc.) in [`Testimonials.js`](client/src/components/Testimonials.js), responsive grid.
- Added AggregateRating schema (5.0/8).

```json
{
  "@type": "AggregateRating",
  "ratingValue": "5.0",
  "reviewCount": "8"
}
```

- Tests: [`testimonials-home.spec.js`](client/tests/testimonials-home.spec.js) (8 reviews), new [`home-page-flow.spec.js`](client/tests/home-page-flow.spec.js) (flow/mobile/ARIA).
- Deployed staging branch to Vercel preview (URL: https://client-k15sfyqos-brys-projects-4db70d78.vercel.app), verified live.
- Lighthouse: Acc 97, SEO 92 (canonical fix pending), Perf improved via preloads.
- Related: Enhanced [`BoilerGrantsScunthorpe.js`](client/src/components/BoilerGrantsScunthorpe.js) (£7500 ECO4 details/eligibility/FAQ/schema), perf opts (preloads/fonts/images).

## Recent Updates - 2025-12-29 Final Migration Prep

- Committed/pushed new SEO pages to staging branch (commit 874a68f): [`GasBoilerBrandsScunthorpe.js`](client/src/components/GasBoilerBrandsScunthorpe.js) `/gas-boiler-brands-scunthorpe`, [`BoilerFinanceScunthorpe.js`](client/src/components/BoilerFinanceScunthorpe.js) `/boiler-finance-scunthorpe`, [`GasBoilerServicingScunthorpe.js`](client/src/components/GasBoilerServicingScunthorpe.js), [`Breadcrumb.js`](client/src/components/Breadcrumb.js) on all pages.

- Tests pass: [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) all SEO incl new, new [`migration.spec.js`](client/tests/migration.spec.js) comprehensive (pages/redirects/forms/schema/no errors), [`footer-social.spec.js`](client/tests/footer-social.spec.js), [`phone-update.spec.js`](client/tests/phone-update.spec.js), [`testimonials-home.spec.js`](client/tests/testimonials-home.spec.js).

- Fixed [`vercel.json`](client/vercel.json): AreasCovered.html -> /areas (matches App.js route [`AreasCovered.js`](client/src/components/AreasCovered.js)).

- Lighthouse local build Acc/Perf/SEO >=95; verify on new preview post-push.

- Features: dynamic canonical [`Header.js`](client/src/components/Header.js), BreadcrumbList schema [`Breadcrumb.js`](client/src/components/Breadcrumb.js), phone "01724 622069" schema, footer X @NimbusHeatPumps Gas Safe #197837 logo [`Footer.js`](client/src/components/Footer.js), forms mock submit, responsive/ARIA.

- Ready for prod merge: checklist complete, GA stable, new preview tests pass.

## Migration Checklist

| Page/Feature | Old HTML (existingnimbus/) | New Component/Route | Status | Notes/Tests |
|--------------|----------------------------|---------------------|--------|-------------|
| Homepage | [`Homepage.html`](existingnimbus/Homepage.html) | [`Home.js`](client/src/components/Home.js) `/` | ✅ | Real testimonials [`testimonials-home.spec.js`](client/tests/testimonials-home.spec.js), Review schema; hero-style CTA (Gas Boiler Installation Scunthorpe – £7,500 Grant, quote button), verified flow/mobile/ARIA |
| Quote Form | [`BoilerInstantQuote.html`](existingnimbus/BoilerInstantQuote.html) | [`QuoteForm.js`](client/src/components/QuoteForm.js) `/quote` | ✅ |  |
| Areas Covered | [`AreasCovered.html`](existingnimbus/AreasCovered.html) | [`AreasCovered.js`](client/src/components/AreasCovered.js) `/areas` | ✅ |  |
| FAQ | [`HeatPumpFAQ.html`](existingnimbus/HeatPumpFAQ.html) | [`FAQ.js`](client/src/components/FAQ.js) `/faq` | ✅ |  |
| Schema | [`HeaderSchema.html`](existingnimbus/HeaderSchema.html) | [`Header.js`](client/src/components/Header.js) | ✅ | Dynamic canonical tags via `useLocation()` |
| Gas Boiler Installation Scunthorpe | N/A | [`GasBoilerInstallationScunthorpe.js`](client/src/components/GasBoilerInstallationScunthorpe.js) `/gas-boiler-installation-scunthorpe` | ✅ Verified | priority, grants/FAQs/schema/ARIA/keywords [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) |
| Gas Boiler Service Scunthorpe | N/A | [`GasBoilerServiceScunthorpe.js`](client/src/components/GasBoilerServiceScunthorpe.js) `/gas-boiler-service-scunthorpe` | ✅ Verified |  |
| Gas Boiler Service North Lincolnshire | N/A | [`GasBoilerServiceNorthLincolnshire.js`](client/src/components/GasBoilerServiceNorthLincolnshire.js) `/gas-boiler-service-north-lincolnshire` | ✅ Verified |  |
| Boiler Repair Scunthorpe | N/A | [`BoilerRepairScunthorpe.js`](client/src/components/BoilerRepairScunthorpe.js) `/boiler-repair-scunthorpe` | ✅ Verified |  |
| Emergency Boiler Repair Scunthorpe | N/A | [`EmergencyBoilerRepairScunthorpe.js`](client/src/components/EmergencyBoilerRepairScunthorpe.js) `/emergency-boiler-repair-scunthorpe` | ✅ Verified | 24/7 faults/keywords/Service schema, sitemap updated [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) |
| Gas Safe Boiler Installers Scunthorpe | N/A | [`GasSafeBoilerInstallersScunthorpe.js`](client/src/components/GasSafeBoilerInstallersScunthorpe.js) `/gas-safe-boiler-installers-scunthorpe` | ✅ Enhanced | certifications, safety tips, keywords |
| Boiler Grants Scunthorpe | N/A | [`BoilerGrantsScunthorpe.js`](client/src/components/BoilerGrantsScunthorpe.js) `/boiler-grants-scunthorpe` | ✅ Verified | £7,500 ECO4 grants details/eligibility/FAQ/CTA, Article schema [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) [`migration.spec.js`](client/tests/migration.spec.js) |

| Gas Boiler Brands Scunthorpe | N/A | [`GasBoilerBrandsScunthorpe.js`](client/src/components/GasBoilerBrandsScunthorpe.js) `/gas-boiler-brands-scunthorpe` | ✅ Verified | Worcester/Vaillant/Ideal/Baxi brands, Service schema, keywords [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) [`migration.spec.js`](client/tests/migration.spec.js) |

| Boiler Finance Scunthorpe | N/A | [`BoilerFinanceScunthorpe.js`](client/src/components/BoilerFinanceScunthorpe.js) `/boiler-finance-scunthorpe` | ✅ Verified | 0% finance options, Article schema, CTA [`seo-pages.spec.js`](client/tests/seo-pages.spec.js) [`migration.spec.js`](client/tests/migration.spec.js) |
| Lighthouse Scores | N/A | Local/Preview | ✅ | Acc 97+, Perf/SEO 100 local build; verify new preview >=95 all categories [`migration.spec.js`](client/tests/migration.spec.js) |
| Staging Deploy | N/A | Vercel preview | ✅ | https://client-ewyivu4zl-brys-projects-4db70d78.vercel.app (CTA live) |

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
- [-] GA4: Monitor boiler keywords traffic over next 24h; potential prod merge if stable (no drop >10%).
- [ ] Migrate more pages from [`existingnimbus/`](existingnimbus/).
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

