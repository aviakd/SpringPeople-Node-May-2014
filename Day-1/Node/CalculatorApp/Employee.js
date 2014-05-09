function Employee(id,name,salary){
	var _id = id,
		_name = name,
		_salary = salary;

	this.id = function(){
		return _id;
	};
	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
	};

	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if (val > _salary) _salary = val;
	}
}
module.exports = Employee;