module.exports = function(app) {

	var HomeController = app.controllers.HomeController;

	app.route('/').get(HomeController.index);
}