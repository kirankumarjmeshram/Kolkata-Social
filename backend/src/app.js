const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const userRoute = require('./routes/user');
const profileRoute = require('./routes/profile');
const postRoute = require('./routes/Post');
const commentRoute = require('./routes/comment');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorHandler/error');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT,
  })
);
cloudinary();

//~routes
app.use('/api/v1/users', userRoute);

app.use('/api/v1/profile', profileRoute);
app.use('/api/v1/post', postRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

//^global error handler
app.use(globalErrorHandler);

module.exports = app;
