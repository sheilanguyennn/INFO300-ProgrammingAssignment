// Name: Sheila Nguyen

const readlineSync = require('readline-sync');

let start = parseInt(readlineSync.question("Enter start number: ")); // Fixed: converted input from string to integer
let end = parseInt(readlineSync.question("Enter end number: ")); // Fixed: converted input from string to integer

let count = 0;
for (let i = start; i <= end; i++) {
  if (i % 2 == 0) { // Fixed: used modulus operator to test if number is even
    count += 1; // Fixed: changed =+ to += so count increases correctly
  }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);