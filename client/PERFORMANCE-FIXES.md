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