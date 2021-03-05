var data = require('../data.json');


exports.view = function(request, response){
	// console.log(data);
	response.render('routine', data['wellness-routine']);
};