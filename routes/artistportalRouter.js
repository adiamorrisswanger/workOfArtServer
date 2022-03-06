const express = require('express');
const artistportalRouter = express.Router();

artistportalRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send artistportal to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /artistportal');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /artistportal');
})
.delete((req, res) => {
    res.end('Deleting artistportal');
});

module.exports = artistportalRouter;