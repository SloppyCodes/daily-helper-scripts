const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputFolder = 'D:\\files\\ocr';
const outputFolder = 'D:\\files\\ocr\\texts';

// Get a list of files in the input folder
fs.readdir(inputFolder, (err, files) => {
    if (err) throw err;

    // Loop through each file
    files.forEach((file) => {
        // Get the full path of the file
        const inputPath = path.join(inputFolder, file);

        // Check if the file is an image
        if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {

            // Get the filename without the extension
            const filenameWithoutExt = path.parse(file).name;

            // Set the output filename
            const outputFilename = `${filenameWithoutExt}.png`;

            // Create the output path
            const outputPath = path.join(outputFolder, outputFilename);

            // Convert the image to PNG and save it to the output folder
            sharp(inputPath)
                .png()
                .toFile(outputPath, (err) => {
                    if (err) throw err;
                    console.log(`${inputPath} converted to ${outputPath}`);
                });
        }
    });
});
