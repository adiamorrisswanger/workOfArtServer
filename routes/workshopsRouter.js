const express = require('express');
const Workshop = require('../models/workshop');
const authenticate = require('../authenticate');
const workshopsRouter = express.Router();
const cors = require('./cors'); 

workshopsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
   Workshop.find()
   .then(workshops => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.json(workshops);
   })
   .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Workshop.create(req.body)
    .then(workshop => {
        console.log('Workshop created', workshop);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(workshop);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /workshops');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Workshop.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

workshopsRouter.route('/:workshopId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Workshop.findById(req.params.workshopId)
    .then(workshop => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(workshop);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /workshops/:workshopId')
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    Workshop.findByIdAndUpdate(req.params.workshopId, {
        $set: req.body
    }, { new: true})
    .then(workshop => {
        console.log('Workshop updated');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(workshop)
    }) 
    .catch(err => next(err))
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    Workshop.findByIdAndDelete(req.params.workshopId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = workshopsRouter;