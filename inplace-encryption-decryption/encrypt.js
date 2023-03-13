const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// specify the path to the folder to encrypt
const folderPath = 'PATH_TO_FOLDER_TO_ENCRYPT';

// generate a random encryption key
const encryptionKey = crypto.randomBytes(32);
fs.writeFileSync('./encryptionKey.txt', encryptionKey);

// encrypt the folder contents
encryptFolder(folderPath, encryptionKey);

function encryptFolder(folderPath, encryptionKey) {
    // read the contents of the folder
    const folderContents = fs.readdirSync(folderPath, { withFileTypes: true });

    // loop through each file/directory in the folder
    folderContents.forEach((item) => {
        // create the full path to the current item
        const itemPath = path.join(folderPath, item.name);

        if (item.isDirectory()) {
            // if the item is a directory, recursively encrypt its contents
            encryptFolder(itemPath, encryptionKey);
        } else {
            // if the item is a file, encrypt its contents
            const fileData = fs.readFileSync(itemPath);
            const encryptedData = encryptData(fileData, encryptionKey);
            fs.writeFileSync(itemPath, encryptedData);
        }
    });
}

function encryptData(data, key) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    const encrypted = cipher.update(data);
    const finalBuffer = Buffer.concat([encrypted, cipher.final()]);
    const tag = cipher.getAuthTag();
    return Buffer.concat([iv, tag, finalBuffer]);
}
