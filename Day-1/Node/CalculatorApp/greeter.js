var readline = require("readline");
var iface = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});
function greet(){
	iface.question("May I know your name?",function(name){
		console.log("Hi " + name);
	});
}
module.exports = greet;