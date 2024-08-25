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
