function ScrapService(app) {
	const username = process.env.USERNAME;
	const password = process.env.PASSWORD;

	var authenticate = function(username, password) {
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
				console.log(body);
			}
		});
	}

	if (username && password)
		authenticate(username, password);
}

module.exports = ScrapService;
