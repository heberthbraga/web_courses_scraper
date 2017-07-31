const ScrapService = require('./ScrapService');
const util = require('util');

function CoursesService(app) {
	this.app = app;

	CoursesService.prototype.list_courses = function(cb) {
		const scrapService = new ScrapService(app);

		return scrapService.load(function(body) {
			var $ = app.locals.cheerio.load(body);
			let availableCourses = [];

			$('.row.list-unstyled.pt-4 li a .media .media-body').each(function(i, elem) {
				availableCourses.push({
					name: $(this).find('.d-block').text(),
					instructor: $(this).find('.grey-color').text(),
					videos: $(this).find('.text-muted').text()
				});
			});

			cb(availableCourses);
		});
	};

};

module.exports = CoursesService;