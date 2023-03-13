const {createWorker} = require('tesseract.js');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

// Set input and output directories
const inputDir = 'input';
const outputDir = 'output';

// Find all image files in input directory
const files = glob.sync(path.join(inputDir, '**/*.{jpg,jpeg,png,gif}'));

// Start worker and load language data
(async () => {
    // Initialize Tesseract.js worker
    const worker = await createWorker({
        logger: m => console.log(m)
    });

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    // Process each image file and save text to output directory
    for (const file of files) {
        const {data: {text}} = await worker.recognize(file);
        const output = path.join(outputDir, path.basename(file, path.extname(file)) + '.txt');
        fs.writeFileSync(output, text);
    }

    // Stop worker
    await worker.terminate();
})();
