const express = require('express');
const contactRouter = express.Router();

contactRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send contact to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('Post operation was not supported on /contact');
});

module.exports = contactRouter;
