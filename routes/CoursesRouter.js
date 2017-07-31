module.exports = function(app) {

	var CoursesController = app.controllers.CoursesController;

	app.route('/courses').get(CoursesController.index);
}