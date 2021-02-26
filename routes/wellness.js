var data = require('../wellness.json');


exports.view = function(request, response){
	console.log(data);
	response.render('wellness', data);
};