/*  TASK 04
    01. Create a file named "password-generator" using npm install generate-password
    02. Create a function that generates random passwords and console.log() that password
*/
console.log("\n TASK 04 - Generate random password");

//Create a file named "password-generator" using npm install generate-password
var generatePassword = require("generate-password");

//Create a function that generates random passwords and console.log() that password
var password = generatePassword.generate({
	length: 10,
	letters: true,
	numbers: true,
	symbols: true,
	uppercase: true,
	lowercase: true,
});

console.log("Random Password : ", password);
