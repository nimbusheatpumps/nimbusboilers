const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../client/public');
const images = ['logo192.png', 'logo512.png'];

async function compressImages() {
  for (const img of images) {
    const inputPath = path.join(inputDir, img);
    const outputPath = path.join(inputDir, img.replace('.png', '-compressed.png'));

    try {
      await sharp(inputPath)
        .png({ quality: 80 })
        .toFile(outputPath);
      console.log(`Compressed ${img} to ${outputPath}`);
    } catch (error) {
      console.error(`Error compressing ${img}:`, error);
    }
  }
}

compressImages();