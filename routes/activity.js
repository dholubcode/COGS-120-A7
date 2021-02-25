// exports.view = function(req, res){
//     res.render('activity');
// };

var data = require('../activity.json');


exports.view = function(request, response){
	console.log(data);
	response.render('activity', data);
};