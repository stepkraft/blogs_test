const express = require('express');
const { isAuthenticated } = require('../middleware');
const blogsRoutes = require('../components/blogs');

const init = (app) => {
    const publicApi = express.Router();
    const secureApi = express.Router();

    secureApi.use(isAuthenticated);
    secureApi.use('/api/blogs', blogsRoutes);

    app.use(publicApi);
    app.use(secureApi);
}

module.exports = { init };
