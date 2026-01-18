const {add, sub, multiply, divide} = require('./mylib');

x = 10;
y = 5;
z = 0;

console.log(`Adding ${x} + ${y} = ${add(x, y)}`);
console.log(`Subtracting ${x} - ${y} = ${sub(x, y)}`);
console.log(`Multiplying ${x} * ${y} = ${multiply(x, y)}`);
console.log(`Dividing ${x} / ${y} = ${divide(x, y)}`);

try {
    console.log(`\nAttempting to divide ${x} / ${z} results in:`);
    console.log(`Dividing ${x} / ${z} = ${divide(x, z)}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}