var http = require("http"),
	path = require("path"),
	connect = require("connect");

var app = connect()
	.use(connect.static(path.join(__dirname, "public")))
	.use(connect.bodyParser())
	.use(function(req,res,next){
		console.log(req.body);
		res.write("Wait for the result");
		res.end();
	});
http.createServer(app).listen(9090);