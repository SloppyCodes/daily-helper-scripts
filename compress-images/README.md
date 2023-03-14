# Image Compression Script

This Node.js script compresses all image files in an input directory and saves the compressed images to an output directory. It uses the `sharp` library to resize and compress the images, and the `glob` and `path` modules to find and manipulate the file paths.

## Usage

To use this script, you will need to have Node.js and the `sharp` and `glob` modules installed. You can install them using the following command:
`npm install sharp glob`

To run the script, you will need to modify the following variables at the beginning of the script:

- `inputDir`: the path to the directory containing the input images
- `outputDir`: the path to the directory where the compressed images should be saved
- `quality`: the compression quality of the images (0-100)

After modifying these variables, you can run the script using the following command: `node compressImages.js`


This will compress all image files in the input directory and save the compressed images to the output directory. The original images will not be modified.

