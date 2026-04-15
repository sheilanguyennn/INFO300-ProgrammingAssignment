// Name: Sheila Nguyen

const readlineSync = require('readline-sync');

let text = readlineSync.question("Enter a string: ");

let lowerText = text.toLowerCase();

let frequency = {};
let firstRepeated = "";

for (let i = 0; i < lowerText.length; i++) {
  let char = lowerText[i];

  if (char >= 'a' && char <= 'z') {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }

    if (frequency[char] === 2 && firstRepeated === "") {
      firstRepeated = char;
    }
  }
}

console.log("Letter frequencies:");

for (let letter in frequency) {
  console.log(letter + ": " + frequency[letter]);
}

console.log("First repeated letter: " + firstRepeated);