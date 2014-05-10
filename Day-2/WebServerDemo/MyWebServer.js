var http = require("http");
var connectionHandler = function(req,res){
	console.log("A new connection is established for " + req.url);
	if (req.url === "/favicon.ico"){
		res.statusCode = 404;
	} else {
		res.write("<h1>Welcome to Node</h1>");
	}
	res.end();
}
var server = http.createServer(connectionHandler);
server.listen(9090);
console.log("Web server listening on port 9090");