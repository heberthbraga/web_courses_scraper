module.exports = function(app) {

	var HomeController = {
		index: function(req, res) {
			res.render('home/index', { title: 'Scrap Class Videos', _layoutFile: 'layout' });
		}
	}

	return HomeController;
}