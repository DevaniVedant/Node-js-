// process.argv example 
const [operation, num1, num2] = process.argv.slice(2);

if (!operation || !num1 || !num2) {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  process.exit(1);
}

const a = parseFloat(num1);
const b = parseFloat(num2);

switch (operation) {
  case 'add':
    console.log(`Result: ${a + b}`);
    break;
  case 'subtract':
    console.log(`Result: ${a - b}`);
    break;
    case 'multiply':
    console.log(`Result: ${a * b}`);
    break;
    case 'divide':
    console.log(`Result: ${a / b}`);
    break;
  default:
    console.log('Supported operations: add, subtract multiply divied');
}
