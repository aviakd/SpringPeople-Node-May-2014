var http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs");


var connectionHandler = function(req,res){
	console.log("A new connection is established for " + req.url);

	if (req.url === "/favicon.ico"){
		res.statusCode = 404;
		res.end();
	} else {
		var resourcePath = path.join(__dirname, url.parse(req.url).pathname);
		if (fs.existsSync(resourcePath)){
			var readStream = fs.createReadStream(resourcePath,{encoding : "utf8"});
			readStream.on("data",function(data){
				res.write(data);
			});
			readStream.on("end",function(){
				res.end();
			});
		} else {
			console.log(resourcePath + "-- not found");
			res.statusCode = 404;
			res.end();
		}
	}
	
}
var server = http.createServer(connectionHandler);
server.listen(9090);
console.log("Web server listening on port 9090");