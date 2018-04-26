console.log("I'm in tempConvert.js");
// Write a program that converts a temperature from Fahrenheit to Celsius.
//
// Requirements
//
// Your program should take an integer (in Fahrenheit) and convert
// the temperature to Celsius.
// The output of the program should read: "X degrees Fahrenheit
// is Y degrees Celsius"

var temperature = 50;
var celsius = (temperature - 32) * 5/9;
console.log(temperature + " degrees Fahrenheit is " + celsius + " degrees Celsius");
