var currentValue = 0;
var spinner = {
	up : function(){
		return ++currentValue;
	},
	down : function(){
		return --currentValue;
	}
}
module.exports = spinner;