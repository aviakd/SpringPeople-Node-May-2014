var fs = require("fs");
var stream = fs.createReadStream("sampleFile2.txt", {encoding : "utf8"});
var readCount = 0;
stream.on("data",function(data){
	readCount++;
	console.log(data);
});
stream.on("end",function(){
	console.log("the file is read in " + readCount + " chunks");
});