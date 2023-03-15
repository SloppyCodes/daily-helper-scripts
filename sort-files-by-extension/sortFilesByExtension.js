const fs = require('fs');
const path = require('path');

const inputDir = './input';
const outputDir = './output';

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Loop through the input directory
fs.readdirSync(inputDir).forEach(file => {
    // Get the file extension
    const ext = path.extname(file).toLowerCase();

    // Skip directories and hidden files
    if (fs.statSync(path.join(inputDir, file)).isDirectory() || file.startsWith('.')) {
        return;
    }

    // Create a folder for the extension if it doesn't exist
    const extDir = path.join(outputDir, ext.substring(1));
    if (!fs.existsSync(extDir)) {
        fs.mkdirSync(extDir);
    }

    // Move the file to the extension folder
    fs.renameSync(path.join(inputDir, file), path.join(extDir, file));
});
