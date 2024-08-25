/*  TASK 03
    01. Require the file system to create a file named "welcome.txt" containing one line "Hello Node"
    02. Create a program that reads and console.log data from hello.txt
*/
console.log("\n TASK 03 - Read and console.log data from hello.txt");

var fs = require("fs");

//Create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFileSync("welcome.txt", "Hello Node");

//Read and console.log data from hello.txt asynchronously
data = fs.readFile("welcome.txt", (err, data) => {
	//Callback Function
	if (err) return console.error(err.stack); //stack is a property of the error object
	console.log(
		"ACTION 01 - Asynchronous | Data from welcome.txt : ",
		data.toString()
	);
});

//Read and console.log data from hello.txt synchronously
var data = fs.readFileSync("welcome.txt");
console.log(
	"ACTION 02 - Synchronous | Data from welcome.txt : ",
	data.toString()
);
