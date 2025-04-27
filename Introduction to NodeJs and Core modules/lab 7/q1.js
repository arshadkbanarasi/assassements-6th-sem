
const crypto = require('crypto');

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return 'Error: Division by zero';
  return a / b;
}

function sine(a) {
  return Math.sin(a);
}

function cosine(a) {
  return Math.cos(a);
}

function tangent(a) {
  return Math.tan(a);
}

function generateRandom(length) {
  if (!length) return 'Provide length for random number generation.';
  return crypto.randomBytes(length).toString('binary');
}

switch (operation) {
  case 'add':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(`Result: ${add(num1, num2)}`);
    } else {
      console.log('Please provide valid numbers.');
    }
    break;
  case 'sub':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(`Result: ${subtract(num1, num2)}`);
    } else {
      console.log('Please provide valid numbers.');
    }
    break;
  case 'mult':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(`Result: ${multiply(num1, num2)}`);
    } else {
      console.log('Please provide valid numbers.');
    }
    break;
  case 'divide':
    if (!isNaN(num1) && !isNaN(num2)) {
      console.log(`Result: ${divide(num1, num2)}`);
    } else {
      console.log('Please provide valid numbers.');
    }
    break;
  case 'sin':
    if (!isNaN(num1)) {
      console.log(`Result: ${sine(num1)}`);
    } else {
      console.log('Please provide a valid number.');
    }
    break;
  case 'cos':
    if (!isNaN(num1)) {
      console.log(`Result: ${cosine(num1)}`);
    } else {
      console.log('Please provide a valid number.');
    }
    break;
  case 'tan':
    if (!isNaN(num1)) {
      console.log(`Result: ${tangent(num1)}`);
    } else {
      console.log('Please provide a valid number.');
    }
    break;
  case 'random':
    console.log(generateRandom(num1));
    break;
  default:
    console.log('Invalid operation. Please use one of the following: add, sub, mult, divide, sin, cos, tan, random.');
}
