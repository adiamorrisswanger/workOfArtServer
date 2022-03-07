const express = require('express');
const eventsRouter = express.Router();

eventsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send events to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /events');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /events');
})
.delete((req, res) => {
    res.end('Deleting events')
});

module.exports = eventsRouter;
