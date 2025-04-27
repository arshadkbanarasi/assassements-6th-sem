
const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const fileName = process.argv[3];
const newFileName = process.argv[4];
const content = process.argv.slice(3).join(' ');

function readFile(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(`Error reading file: ${err.message}`);
      return;
    }
    console.log(data);
  });
}

function deleteFile(file) {
  fs.unlink(file, (err) => {
    if (err) {
      console.log(`Error deleting file: ${err.message}`);
      return;
    }
    console.log(`File '${file}' deleted`);
  });
}

function createFile(file) {
  fs.writeFile(file, '', (err) => {
    if (err) {
      console.log(`Error creating file: ${err.message}`);
      return;
    }
    console.log(`File '${file}' created`);
  });
}

function appendToFile(file, content) {
  fs.appendFile(file, content + '\n', (err) => {
    if (err) {
      console.log(`Error appending to file: ${err.message}`);
      return;
    }
    console.log(`Content appended to the file '${file}'`);
  });
}

function renameFile(oldFile, newFile) {
  fs.rename(oldFile, newFile, (err) => {
    if (err) {
      console.log(`Error renaming file: ${err.message}`);
      return;
    }
    console.log(`File '${oldFile}' renamed to '${newFile}'`);
  });
}

function listDirectory(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(`Error listing directory: ${err.message}`);
      return;
    }
    console.log('Files and directories in current directory:');
    files.forEach((file) => {
      console.log(file);
    });
  });
}

switch (operation) {
  case 'read':
    if (fileName) {
      readFile(fileName);
    } else {
      console.log('Please provide the file name to read.');
    }
    break;
  case 'delete':
    if (fileName) {
      deleteFile(fileName);
    } else {
      console.log('Please provide the file name to delete.');
    }
    break;
  case 'create':
    if (fileName) {
      createFile(fileName);
    } else {
      console.log('Please provide the file name to create.');
    }
    break;
  case 'append':
    if (fileName && content) {
      appendToFile(fileName, content);
    } else {
      console.log('Please provide the content and file name to append.');
    }
    break;
  case 'rename':
    if (fileName && newFileName) {
      renameFile(fileName, newFileName);
    } else {
      console.log('Please provide both the old file name and the new file name to rename.');
    }
    break;
  case 'list':
    listDirectory(fileName || '.');
    break;
  default:
    console.log('Invalid operation. Use one of the following: read, delete, create, append, rename, list');
}
