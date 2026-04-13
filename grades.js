// INFO 300 Assignment- Grade Simulator
const readline = require("readline-sync");

// Get a valid score from 0 to 100
function getValidScore(promptText) {
  while (true) {
    const input = readline.question(promptText);
    const score = Number(input);

    if (!Number.isNaN(score) && score >= 0 && score <= 100) {
      return score;
    }

    console.log("Score must be between 0 and 100.");
  }
}

// Convert number grade to letter grade
function getLetterGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Get current average
const currentAverage = getValidScore("Enter your current average: ");

// Ask how many hypothetical final exam scores to test
let numberOfScores;
while (true) {
  const input = readline.question("How many hypothetical final exam scores would you like to enter? ");
  numberOfScores = Number(input);

  if (Number.isInteger(numberOfScores) && numberOfScores > 0) {
    break;
  }

  console.log("Please enter a whole number greater than 0.");
}

console.log("\nGRADE FORECAST REPORT");
console.log("==================================================================");
console.log(
  "Final Score".padEnd(15) +
  "Course Avg".padEnd(15) +
  "Letter Grade".padEnd(15) +
  "Status"
);
console.log("==================================================================");

// Process each hypothetical final exam score
for (let i = 1; i <= numberOfScores; i++) {
  const finalScore = getValidScore(`Enter hypothetical final exam score #${i}: `);

  // Final exam is worth 25%
  const finalCourseAverage = (currentAverage * 0.75) + (finalScore * 0.25);
  const letterGrade = getLetterGrade(finalCourseAverage);

  let status;
  if (finalCourseAverage > currentAverage) {
    status = "Improved";
  } else if (finalCourseAverage < currentAverage) {
    status = "Declined";
  } else {
    status = "Stayed Same";
  }

  console.log(
    finalScore.toFixed(2).padEnd(15) +
    finalCourseAverage.toFixed(2).padEnd(15) +
    letterGrade.padEnd(15) +
    status
  );
}

console.log("==================================================================");
