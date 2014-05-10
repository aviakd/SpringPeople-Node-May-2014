var fs = require("fs");
fs.readFile("./sampleFile2.txt",{encoding : "utf-8"},function(err,fileContents){
	if (!!err){
		console.log("Unexpected error", err);
	} else {
		console.log(fileContents);	
	}
	
});