console.log("I'm in pluralizer.js");
// Write a program that takes an input like...
//
// var thing = 'cat';
// var count = '5';
// and output the pluralized form of the word, depending on what
// count is. For example, "5 cats" or "1 dog".
//
// Requirements
//
// Your program should pluralize the word based on an integer (count)

var thing = 'cat';
var count = '2';

if (count > 1){
  console.log(count + " " + thing + "s")
} else {
  console.log(count + " " + thing);
}
