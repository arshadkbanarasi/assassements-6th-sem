const fs = require('fs');
const command = process.argv[2];
const inputText = process.argv[3];

const fileName = 'notes.txt';

if (command === 'create-file') {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, 'Hello, this is a Node.js file!');
    console.log('File created');
  } else {
    console.log('File already exists');
  }
} else if (command === 'read-file') {
  if (fs.existsSync(fileName)) {
    const content = fs.readFileSync(fileName, 'utf-8');
    console.log(content);
  } else {
    console.log('File does not exist');
  }
} else if (command === 'append-text') {
  if (!inputText) {
    console.log('Please provide text to append');
  } else {
    fs.appendFileSync(fileName, `\n${inputText}`);
    console.log('Text appended');
  }
} else {
  console.log('Invalid command');
}
