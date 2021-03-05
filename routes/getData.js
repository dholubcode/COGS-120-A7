// var express = require('express');
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

var data = require('../data.json');
// var activityPage = data['log-activity']

// Log activity
exports.viewActivity = function(request, response){
	response.render('activity', data['log-activity']);
};

// Wellness routine
exports.viewWellness = function(request, response){
	response.render('wellness', data['wellness-routine']);
};

// Start day
exports.startDay = function(request, response){
	response.render('start', data['log-activity']);
};

// End day
exports.endDay = function(request, response){
	response.render('end', data['log-activity']);
};


exports.showData = function(request, response) {
    var show = request.params.page
    var dataToShow = data[show]
    response.json(dataToShow)
}
