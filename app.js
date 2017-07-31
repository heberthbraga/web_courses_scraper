var express = require('express'),
	path = require('path'),
	favicon = require('serve-favicon'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	engine = require('ejs-mate'),
	dotenv = require('dotenv'),
	load = require('express-load'),
  request = require('request'),
  cheerio = require('cheerio');

var app = express();

dotenv.config();

app.locals.req = request.defaults({
  jar: true,
  rejectUnauthorized: false,
  followAllRedirects: true
});

app.locals.cheerio = cheerio;

// view engine setup
app.engine('ejs', engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var logger = morgan('combined');

load('controllers').then('routes').into(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { _layoutFile: 'layout' });
});

module.exports = app;
