import 'dotenv/config.js'
import './config/db.js'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors' //permite origenes cruzados (el front con el back)
import indexRouter from './routes/index.js';
import product_router from './routes/products.js'
import { __dirname } from './bin/utils.js';
import accesorios_router from './routes/accessories.js';


var app = express();

// view engine setup
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); */

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()) //obliga al servidor a permitir el cruce de origenes el fron con el back


app.use('/api', indexRouter);
app.use('/api/products', product_router);
app.use('/api/paletas', product_router);
app.use('/api/accessories', accesorios_router);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send JSON response for errors
  res.status(err.status || 500).json({ error: err.message });
});

export default app;