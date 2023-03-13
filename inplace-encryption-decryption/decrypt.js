const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

// specify the path to the encrypted folder
const encryptedFolderPath = 'PATH_TO_ENCRYPTED_FOLDER';

// specify the encryption key used to encrypt the folder
const encryptionKey = fs.readFileSync('./encryptionKey.txt');

// decrypt the folder contents
decryptFolder(encryptedFolderPath, encryptionKey);

function decryptFolder(folderPath, encryptionKey) {
    // read the contents of the folder
    const folderContents = fs.readdirSync(folderPath, { withFileTypes: true });

    // loop through each file/directory in the folder
    folderContents.forEach((item) => {
        // create the full path to the current item
        const itemPath = path.join(folderPath, item.name);

        if (item.isDirectory()) {
            // if the item is a directory, recursively decrypt its contents
            decryptFolder(itemPath, encryptionKey);
        } else {
            // if the item is a file, decrypt its contents
            const encryptedData = fs.readFileSync(itemPath);
            const decryptedData = decryptData(encryptedData, encryptionKey);
            fs.writeFileSync(itemPath, decryptedData);
        }
    });
}

function decryptData(encryptedData, key) {
    const iv = encryptedData.slice(0, 16);
    const tag = encryptedData.slice(16, 32);
    const cipherText = encryptedData.slice(32);

    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(tag);
    const decrypted = decipher.update(cipherText);
    return Buffer.concat([decrypted, decipher.final()]);
}
