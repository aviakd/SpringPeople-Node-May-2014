var http = require("http"),
	webSocket = require("nodejs-websocket");

var server = webSocket.createServer(function(conn){
	console.log("A new websocket connection is established");

	conn.on("text",function(data){
		console.log("data received ", data);
		server.connections.forEach(function(con){
			con.sendText(data);
		});
	});
}).listen(9090);
console.log("Socket server listening on port 9090...");