module.exports = function(app) {
	var CoursesService = require('../services/CoursesService');

	var CoursesController = {
		index: function(req, res) {
			const coursesService = new CoursesService(app);

			coursesService.list_courses(function(lastWatchedCourses) {
				res.render('courses/index', { title: 'Courses', _layoutFile: 'layout', lastWatchedCourses: lastWatchedCourses });
			});
		}
	}

	return CoursesController;
}