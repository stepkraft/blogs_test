/* global __dirname */
/* eslint no-undef: "error" */

const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const rootRouter = require('./routes');
const db = require('./models/db');

db.init();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

rootRouter.init(app);

module.exports = app;
