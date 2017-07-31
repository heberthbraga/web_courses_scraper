module.exports = function(app) {
	var CoursesService = require('../services/CoursesService');

	var CoursesController = {
		index: function(req, res) {
			const coursesServices = new CoursesService(app);

			res.render('courses/index', { title: 'Courses', _layoutFile: 'layout' });
		}
	}

	return CoursesController;
}