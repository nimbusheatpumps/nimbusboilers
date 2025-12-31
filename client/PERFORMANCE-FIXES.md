# Performance and Accessibility Fixes

## Images
- Ran [`node server/compress-images.js`](server/compress-images.js) to create optimized WebP versions of logos and hero images in `client/public/images/`.

## Contrast Fixes (Accessibility)
- [`client/src/components/Chat.js`](client/src/components/Chat.js):
  - Changed `bg-blue-500` to `bg-blue-600` on chat header (line 30) and send button (line 49) for better AA contrast ratio.
- [`client/src/components/Footer.js`](client/src/components/Footer.js):
  - Changed `text-gray-500` to `text-gray-200` on calls recorded div (line 583).
  - Changed `text-gray-300` to `text-gray-100` on social link (line 589).
  - Changed `text-gray-300` to `text-white` on copyright p (line 613).

## JS Bundle Optimization (Performance)
- [`client/src/App.js`](client/src/App.js):
  - Removed unused imports for unused components.
  - Removed unused paths from `isSeoPage` check.

Production build created with `npm run build`. Bundle size reduced due to tree-shaking unused code.

Lighthouse scores verified via [`client/tests/lighthouse.spec.js`](client/tests/lighthouse.spec.js).

## Latest Fixes (2025-12-31)
- Replaced external Gas Safe SVG and Nimbus PNG logo in [`client/src/components/Footer.js`](client/src/components/Footer.js) with local optimized versions to reduce payload.
- Desktop build (localhost:3001): Performance 72 (improved from 69), Accessibility 100, SEO 100, Best Practices 73.
- Mobile previous: Performance 52, Accessibility 97 (improved to 100 desktop).
- Remaining: Optimize external iStock images in Home.js, add image dimensions for CLS.