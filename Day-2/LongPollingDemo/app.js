var http = require("http");
http.createServer(function(req,res){
	var counter =0;
	var timer = setInterval(function(){
		res.write(new Date().toString());
		if (++counter >= 10){
			clearInterval(timer);
			res.end();
		}

	},5000);
}).listen(9090);
console.log("Server listening on port 9090...");