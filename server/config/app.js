//app.js Andy Bandela 301282674 17/02/2023
//Importing the packages installed to use in the project 
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongoose = require('mongoose');
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');

//Database setup
let db = require('./db');
run();
//Handling error on initial connection
 async function run() {
  try {
    //Connecting to the database
    await mongoose.connect(db.uri,db.option);
    console.log("Connected to Database Server");
  } catch (error) {
    //Throwing an error if connection fails
    console.error(error);
  }
}
//Removing deprecation Warning
mongoose.set('strictQuery', false);

//handling error after initial connection
mongoose.connection.on('error', err => {
  logError(err);
});

//Importing middleware from the routes folder
let indexRouter = require('../routes/index');
let conctactListRouter = require('../routes/contacts');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname,'../../node_modules')));

//Setting up express-session
app.use(session({
  secret:"mySecretAuth",
  saveUninitialized:false,
  resave:false
}));

//initializing passport
app.use(passport.initialize());
app.use(passport.session());



//Instance of user model
let user = require('../models/user');

//passport user configuration
passport.use(user.createStrategy());
//Encrypting and Decrypting user info(password) using passport
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

//Routing requests to the appropriate route using the imported middleware
app.use('/', indexRouter);
app.use('/contact-list',conctactListRouter);

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
  res.render('error',{title:"Error"});
});

module.exports = app;
