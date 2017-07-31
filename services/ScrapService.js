function ScrapService(app) {
	const username = process.env.USERNAME;
	const password = process.env.PASSWORD;
	this.app = app;

	var authenticate = function(cb) {
		console.log('Authenticating user=', username);

		app.locals.req.post({
			url: `${process.env.TARGET_HOST}/login/index/autenticar`,
			form: {email: username, senha: password},
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		},

		function(err, res, body) {
			if (err) {
				console.log('Error trying to authenticate: ', err);
			}

			if (res && res.statusCode === 200) {
				console.log('Authenticated...');

				cb(res.headers['set-cookie']);
			}
		});
	};

	ScrapService.prototype.load = function(cb) {
		authenticate(function(cookie) {
			app.locals.req.get({
				url: `${process.env.TARGET_HOST}/aluno`,
				headers: {
					'Content-Type': 'text/html',
					'Cookie': cookie
				}
			}, function(err, res, body) {
				if (err) {
					console.log('Error trying to get the page: ', err);
				}

				console.log('Loading page...');

				cb(body);
			});
		});
	};
};

module.exports = ScrapService;
