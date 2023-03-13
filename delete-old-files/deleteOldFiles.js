const fs = require('fs');
const path = require('path');

// Set the directory path and the date before which files should be deleted
const directoryPath = 'DIRECTORY_TO_DELETE_FILES_FROM';
const deleteBeforeDate = new Date('2023-03-14');

// Recursively delete files older than deleteBeforeDate
function deleteFiles(directoryPath, deleteBeforeDate) {
    // Get the list of files in the directory
    const files = fs.readdirSync(directoryPath);

    // Loop through each file and delete if it is older than deleteBeforeDate
    files.forEach(function(file) {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);
        const fileLastModified = stats.mtime;

        if (fileLastModified < deleteBeforeDate) {
            if (stats.isDirectory()) {
                deleteFiles(filePath, deleteBeforeDate); // Recursively delete files in subdirectories
            } else {
                fs.unlinkSync(filePath); // Delete the file
                console.log('Deleted file: ' + filePath);
            }
        }
    });
}

// Call the deleteFiles function
deleteFiles(directoryPath, deleteBeforeDate);
