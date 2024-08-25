/*  TASK 01
    01. Create a file named hello-world.js 
    02. Write a program to print "HELLO WORLD" to the console
*/
console.log("\n TASK 01 - print HELLO WORLD to the console");
console.log("Hello World");

/*  TASK 02
    01. Create a server
    02. Write a program that runs on port 3000 and responds with '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
*/
console.log("\n TASK 02 - Server runs on port 8000");
var http = require("http");
http
	.createServer((req, res) => {
		res.end("<h1>Hello Node!!!!</h1>\n");
	})
	.listen(8000); //Changed the port to 8000 from 3000 to avoid conflict with other tasks
console.log("Server is running on: http://localhost:8000");

/*  TASK 03
    01. Require the file system to create a file named "welcome.txt" containing one line "Hello Node"
    02. Create a program that reads and console.log data from hello.txt
*/
console.log("\n TASK 03 - Read and console.log data from hello.txt");
var fs = require("fs");
//Create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFileSync("welcome.txt", "Hello Node");
//Read and console.log data from hello.txt synchronously so that the rest of the tasks will be executed after this task
data = fs.readFileSync("welcome.txt");
console.log("Data from welcome.txt : ", data.toString());

/*  TASK 04
    01. Create a file named "password-generator" using npm install generate-password
    02. Create a function that generates random passwords and console.log() that password
*/
//Create a file named "password-generator" using npm install generate-password
console.log("\n TASK 04 - Generate random password");
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

/*  TASK 05
    01. Create a file named "email-sender" npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)
    02. Use nodemailer to send an email to yourself
*/
console.log("\n TASK 05 - Send an email to yourself");
var nodemailer = require("nodemailer");
//Create a transporter object
var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "sender-email@gmail.com", //I changed the email to fake one before upload to github, for security reasons
		pass: "sender-passeword", //I changed the passeword to fake one before upload to github, for security reasons
	},
});
//Create a mailOptions object and send an email to an email address
var mailOptions = {
	from: "sender-email@gmail.com", //I changed the email to fake one before upload to github, for security reasons
	to: "receiver-email@gmail.com", //I changed the email to fake one before upload to github, for security reasons
	subject: "Sending Email using Node.js",
	text: "That was easy!",
};
//Send an email to  an email address and console.log the response from the server
transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
		// When runing, i get error here, because I changed the email and password to fake one before upload to github, for security reasons - Works good with real email and password
	}
});
