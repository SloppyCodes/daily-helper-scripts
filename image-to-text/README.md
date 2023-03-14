# Tesseract OCR Image to Text Converter

This code uses Tesseract.js library to convert images to text. It finds all image files in the `input` directory, processes each file using Tesseract OCR, and saves the output text to the `output` directory.

## Getting Started

To use this code, follow the steps below:

1. Install Tesseract.js and glob libraries: npm install tesseract.js glob
2. Create the `input` and `output` directories and add the images you want to convert to text in the `input` directory.
3. Run the code using Node.js: node imageToText.js
4. Check the output directory for the converted text files.

Note: This code currently supports jpg, jpeg, png, and gif file formats. If you want to add support for additional formats, modify the glob pattern in line 10 of index.js.
# Dependencies

This code requires the following dependencies:

Tesseract.js: https://github.com/naptha/tesseract.js

Glob: https://github.com/isaacs/node-glob


## License

This code is licensed under the MIT License. See the LICENSE file for more information.
