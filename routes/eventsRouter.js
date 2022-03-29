const express = require('express');
const Event = require('../models/event');
const eventsRouter = express.Router();
const authenticate = require('../authenticate');
const cors = require('./cors');

eventsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
   Event.find()
   .then(event => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.json(event);
   })
   .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Event.create(req.body)
    .then(event => {
        console.log('Event created', event);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(event);
    })
    .catch(err => next(err));
   
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /events');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Event.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

eventsRouter.route('/:eventId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Event.findById(req.params.eventtId)
    .then(event => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(event);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /events')
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    Event.findByIdAndUpdate(req.params.eventId, {
        $set: req.body
    }, { new: true})
    .then(event => {
        console.log('Event updated');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(event)
    }) 
    .catch(err => next(err))
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    Event.findByIdAndDelete(req.params.eventId)
    .then(response => {
        res.statusCode = 200; 
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = eventsRouter;
