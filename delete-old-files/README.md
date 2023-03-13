# Recursively Delete Files Older than Specified Date

This is a Node.js script that recursively deletes files older than a specified date in a directory and its subdirectories.

## Usage

1. Set the `directoryPath` variable to the path of the directory you want to delete files from.
2. Set the `deleteBeforeDate` variable to the date before which files should be deleted.
3. Run the script using `node delete-files.js`.

The script will recursively delete all files in the specified directory and its subdirectories that were last modified before the specified date. The script outputs a message for each file that is deleted.

## Example

To delete all files in the directory `/home/user/documents` and its subdirectories that were last modified before January 1, 2022, set `directoryPath` to `/home/user/documents` and `deleteBeforeDate` to `new Date('2022-01-01')`.

