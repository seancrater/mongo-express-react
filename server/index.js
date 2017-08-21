const express = require('express');

const api = require('./api');
const router = require('./router');
const webpack = require('./webpack');

const app = express();
const config = (process.env.NODE_ENV === 'prod') ? require('../webpack.config.production') : require('../webpack.config');

webpack.init(app, config);
router.init(app);
api.init(app);
