module.exports = function(app) {
	var ScrapService = require('./ScrapService')(app);

	var CoursesService = {

		list_courses: function() {
			var availabelCourses = [];

			ScrapService.authenticate();

			// app.locals.req.get({
			// 			url: `${process.env.TARGET_HOST}/cursos`
			// 		}, function(err, res, body) {
						
			// 			console.log(body);
			// 		});

			// ;
		}
	}

	return CoursesService;
}