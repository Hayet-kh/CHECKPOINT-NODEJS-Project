/*  TASK 02
    01. Create a server
    02. Write a program that runs on port 3000 and responds with '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
*/
console.log("\n TASK 02 - Server runs on port 3000");

var http = require("http");
http
	.createServer((req, res) => {
		res.end("<h1>Hello Node!!!!</h1>\n");
	})
	.listen(3000);

console.log("Server is running on: http://localhost:3000");
