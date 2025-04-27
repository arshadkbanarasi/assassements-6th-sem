
const chalk = require('chalk');
const { add, subtract, multiply, divide } = require('./mathOperations');

const a = 10;
const b = 5;

const additionResult = add(a, b);
const subtractionResult = subtract(a, b);
const multiplicationResult = multiply(a, b);
const divisionResult = divide(a, b);

console.log(chalk.green(`Addition: ${additionResult}`));
console.log(chalk.red(`Subtraction: ${subtractionResult}`));
console.log(chalk.yellow(`Multiplication: ${multiplicationResult}`));
console.log(chalk.blue(`Division: ${divisionResult}`));
