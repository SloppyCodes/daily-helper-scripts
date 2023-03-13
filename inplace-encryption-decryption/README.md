# Inplace encryption and Decryption of Folder Contents

This script can be used to encrypt and decrypt the contents of a folder using the AES-256-GCM encryption algorithm.
The script uses the Node.js fs and crypto modules for file system and encryption operations.

## Usage

1. To encrypt a folder, specify the path to the folder you want to encrypt in the `folderPath` variable in the `encryptFolder` function. Then run the script with `node encrypt.js`.
A random encryption key will be generated and saved to a file called `encryptionKey.txt` in the same directory as the script. The contents of the folder will be encrypted using the encryption key.

2. To decrypt a folder, specify the path to the encrypted folder in the `encryptedFolderPath` variable in the `decryptFolder` function. Then run the script with `node decrypt.js`. The encryption key will be read from the `encryptionKey.txt` file, and the contents of the folder will be decrypted using the encryption key.

Note: make sure to keep the `encryptionKey.txt` file secure, as it is required for decryption.

## License

This script is licensed under the MIT License. Feel free to use and modify the script as you wish.



