var data = require('../data.json');


exports.view = function(request, response){
	// console.log(data);
	response.render('wellness', data['wellness-routine']);
};