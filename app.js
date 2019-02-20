const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });
const bodyParser = require('body-parser');

require('dotenv').config();



const indexRouter = require('./controllers/index');
const usersController = require('./controllers/users');
const locationsController = require('./controllers/locations');
const eventsController = require('./controllers/events');
const reviewsController = require('./controllers/reviews');
const loginController = require('./controllers/login');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersController);
app.use('/locations', locationsController);
app.use('/events', eventsController);
app.use('/reviews', reviewsController);
app.use('/login', loginController);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
