const sharp = require('sharp');
const glob = require('glob');
const path = require('path');

// Set input and output directories
const inputDir = 'input';
const outputDir = 'output';

// Set compression quality
const quality = 80;

// Find all image files in input directory
const files = glob.sync(path.join(inputDir, '**/*.{jpg,jpeg,png,gif}'));

// Compress each image file and save to output directory
files.forEach(file => {
    sharp(file)
        .jpeg({ quality })
        .toFile(path.join(outputDir, path.basename(file)));
});
