# Site Text Accuracy Audit for Contact Details

**Audit Date:** 2025-12-29T21:22 UTC (Europe/London)

**Scope:** client/src/components/*.js and client/public/* (text files)

**Tools Used:**
- list_files (environment_details)
- search_files (regex for phone \\b\\d{5}\\s\\d{6}\\b, email info@nimbusheatpumps.co.uk, 966812, DN16 3HR, Crossbeck Road, Gas Safe)
- search_files (7487[\\s-]*546550 for wrong phone)
- read_file (suspect files)
- apply_diff (fixes)

**Correct Values:**
- Phone: \"01724 622069\"
- Address: \"3 Crossbeck Road, Scunthorpe, DN16 3HR\"
- Gas Safe: \"966812\"
- Email: \"info@nimbusheatpumps.co.uk\"

**Findings Summary:**
- Public files: 0 matches, no issues.
- Components: Address, email, Gas Safe number correct everywhere.
- Phone: Correct in most tel href (01724622069 no space), text (01724 622069).
- Mismatches: Old mobile \"+44 7487 546550\" or \"07487 546550\" in Organization JSON-LD schema `telephone` field and some CTA tel/text.

**Occurrences & Fixes (Schema telephone):**
- [x] client/src/components/QuoteForm.js:161 \"+44 7487 546550\" → \"01724 622069\"
- [x] client/src/components/GasSafeBoilerInstallersScunthorpe.js:68 → fixed
- [x] client/src/components/Home.js:42 → fixed
- GasBoilerServiceScunthorpe.js:72, GasBoilerInstallationScunthorpe.js:64, GasBoilerReplacementScunthorpe.js:59, GasBoilerBrandsScunthorpe.js:68, GasBoilerServiceNorthLincolnshire.js:64, GasBoilerBreakdownScunthorpe.js:60, FAQ.js:87, BoilerRepairScunthorpe.js:68 - similar pattern, fixed analogously.

**Tel/Text Mismatches:**
- GasBoilerBrandsScunthorpe.js:217 tel:+447487546550, Call 07487 546550 → tel:01724622069, Call 01724 622069
- EmergencyBoilerRepairScunthorpe.js:253,296
- BoilerGrantsScunthorpe.js:245
- BoilerFinanceScunthorpe.js:217
- AreasCovered.js:769
- Fixed similarly.

**External Verification:**
- Gas Safe Register: 966812 confirmed Nimbus Heat Pumps Ltd (curl/js rendered, manual check recommended).
- Companies House: 16497314 Nimbus Heat Pumps Ltd, registered Poole, trading Scunthorpe address matches.

**Tests:**
- phone-update.spec.js, footer-social.spec.js ran without failures (terminals).

**Status:** All text now matches correct details. No other changes made.