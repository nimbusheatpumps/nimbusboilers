const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../client/public');
const images = ['logo192.png', 'logo512.png', 'images/nimbus-logo.png', 'images/worcester-greenstar.png', 'images/baxi-logo.png', 'images/ideal-logo.png', 'images/vaillant-logo.png', 'images/worcester-logo.png', 'images/gas-safe-logo.png', 'images/hero-install.jpg', 'images/hero-home.jpg'];

async function compressImages() {
  for (const img of images) {
    const inputPath = path.join(inputDir, img);
    const name = path.basename(img, path.extname(img));
    const outputPath = path.join(inputDir, path.dirname(img) || '.', name + '.webp');

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Created WebP ${path.basename(outputPath)} from ${img}`);
    } catch (error) {
      console.error(`Error compressing ${img}:`, error);
    }
  }
}

compressImages();