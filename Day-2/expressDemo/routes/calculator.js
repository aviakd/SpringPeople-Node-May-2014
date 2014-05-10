module.exports = {
	getInput : function(req,res){
	    res.render('calculator');
	},
	process : function(req,res){
	    var addResult = parseInt(req.body.number1) + parseInt(req.body.number2);
	    var result = {
	        number1 : req.body.number1,
	        number2 : req.body.number2,
	        addResult : addResult
	    };
	    res.render('calculator', result);
	}
}