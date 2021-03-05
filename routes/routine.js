var data = require('../routine.json');


exports.view = function(request, response){
	console.log(data);
	response.render('routine', data);
};