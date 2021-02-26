var data = require('../activity.json');


exports.view = function(request, response){
	console.log(data);
	response.render('start', data);
};