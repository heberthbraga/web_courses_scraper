module.exports = function(app) {

	var HomeController = {
		index: function(req, res) {
			res.render('home/index', { title: 'Web Courses Scraper', _layoutFile: 'layout' });
		}
	}

	return HomeController;
}