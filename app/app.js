/* global __dirname */
/* eslint no-undef: "error" */

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const rootRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

rootRouter.init(app);

module.exports = app;
