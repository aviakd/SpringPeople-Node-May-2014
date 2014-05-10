var http = require("http"),
	path = require("path"),
	fs = require("fs"),
	connect = require("connect");

var app = connect()
	.use(connect.static(path.join(__dirname, "public")))
	.use(connect.bodyParser())
	.use(function(req,res,next){
		if (req.url === "/calculate" && req.method === "POST"){
			var result = parseInt(req.body.number1) + parseInt(req.body.number2);
			var template = fs.readFileSync(path.join(__dirname,"public","calculatorResult.html"),{encoding : "utf8"});
			template = template.replace("{0}", req.body.number1)
				.replace("{1}", req.body.number2)
				.replace("{2}", result);
			res.write(template);
			res.end();
		}else{
			next();
		}
	});
http.createServer(app).listen(9090);