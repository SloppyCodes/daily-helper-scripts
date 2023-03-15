# Batch file extension sorter

This Node.js script loops through a folder, finds all the existing file extensions, creates a folder for each extension, and moves the files to the folders matching their extensions. This can be useful for organizing a messy folder of files into subfolders based on their extensions.

## Usage

1. Clone this repository or download the `sortFilesByExtension.js` file.
2. Change the values of the `input` and the `output` constants.
3. Place the files that you want to sort into the `input` folder.
4. Open a terminal window in the directory containing `sortFilesByExtension.js`.
5. Run the command `node sortFilesByExtension.j`s to execute the script.
6. The script will create a folder for each extension in a new folder named `output`, and move the files to the folders matching their extensions.

## Notes

- This script assumes that the files in the input folder do not have any duplicate names with different extensions.
- Hidden files and folders (those starting with a dot) are skipped.
- The script is case-insensitive when sorting by file extension.
- The output folder is created automatically if it does not exist.
- If a folder already exists in the output directory with the same name as an extension, the files with that extension will be moved into that folder.
