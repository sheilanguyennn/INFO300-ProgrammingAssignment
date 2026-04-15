// Name: Sheila Nguyen

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the number of Fibonacci numbers to generate: "));

let fibonacci = [];

for (let i = 0; i < n; i++) {
  if (i === 0) {
    fibonacci.push(0);
  } else if (i === 1) {
    fibonacci.push(1);
  } else {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
}

let oddFibonacci = [];

for (let i = 0; i < fibonacci.length; i++) {
  if (fibonacci[i] % 2 !== 0) {
    oddFibonacci.push(fibonacci[i]);
  }
}

console.log("Full sequence: [" + fibonacci.join(", ") + "]");
console.log("Odd Fibonacci numbers: [" + oddFibonacci.join(", ") + "]");