const express = require('express');
const Contact = require('../models/contact');
const authenticate = require('../authenticate');
const contactRouter = express.Router();
const cors = require('./cors');


contactRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Contact.find()
        .then(contacts => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(contacts);
        })
        .catch(err => next(err));
})
//Not sure why this is giving an error. Doesn't seem to be the headers, actually.
.post(cors.corsWithOptions, (req, res, next) => {
    Contact.create(req.body)
    .then(contact => {
        console.log('Contact created', contact);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(contact);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /contact');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Contact.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

contactRouter.route('/:contactId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Contact.findById(req.params.contactId)
    .then(contact => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(contact);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /contact')
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    Contact.findByIdAndUpdate(req.params.contactId, {
        $set: req.body
    }, { new: true})
    .then(contact => {
        console.log('Contact updated');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(contact)
    }) 
    .catch(err => next(err))
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    Unit.findByIdAndDelete(req.params.contactId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = contactRouter;
