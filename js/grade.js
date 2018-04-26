console.log("I'm in Grade.js");

// Write a program that will print the letter grade, given a
// variable with a test score. Display either "A", "B", "C", "D", or "F",
// for an score that is an integer between 0 and 100.
// Requirements
// Your program should have a variable to store the letter grade
// (an integer between 0 and 100)
// For the letter grades, you may use whatever grading scale you like
// You must use a switch statement (hint, you may need to review
// and think about how the switch statement works)


var testScore = 49;

switch (true) {
  case (testScore === 100):
    console.log("You got an A+");
    break;
  case (testScore < 99 && testScore >= 90):
    console.log("You got an A");
    break;
  case (testScore < 90 && testScore >= 80):
    console.log("You got an B");
    break;
  case (testScore < 80 && testScore >= 70):
    console.log("You got an C");
    break;
  case (testScore < 70 && testScore >= 60):
    console.log("You got an D");
    break;
  case (testScore < 60 && testScore >= 50):
    console.log("You got an F");
    break;
  case (testScore < 50):
    console.log("man we need to study");
    break;
  default:
    console.log(testScore);
}
