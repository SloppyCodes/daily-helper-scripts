const { createCanvas } = require('canvas');
const fs = require('fs');

// Define the size of the canvas and text to be drawn
const canvasWidth = 400;
const canvasHeight = 200;
const fontSize = 36;

// Get the user input
const userInput = process.argv[2] || 'Hello, World!'; // Default to "Hello, World!" if no input provided

// Create a new canvas
const canvas = createCanvas(canvasWidth, canvasHeight);

// Get the canvas context
const ctx = canvas.getContext('2d');

// Set the font properties
ctx.font = `${fontSize}px Arial`;

// Set the fill color
ctx.fillStyle = '#000';

// Set the text alignment and baseline
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Draw the text on the canvas
ctx.fillText(userInput, canvasWidth / 2, canvasHeight / 2);

// Save the image to a file
const out = fs.createWriteStream(__dirname + '/output.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('The image was saved to output.png.'));
