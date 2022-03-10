const express = require('express');
const Unit = require('../models/unit');

const artistportalRouter = express.Router();

artistportalRouter.route('/')
.get((req, res, next) => {
   Unit.find()
   .then(units => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       res.json(units);
   })
   .catch(err => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /artistportal')
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /artistportal');
})
.delete((req, res, next) => {
    Unit.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

artistportalRouter.route('/:unitId')
.get((req, res, next) => {
    Unit.findById(req.params.unitId)
    .then(unit => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(unit);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Unit.create(req.body)
    .then(unit => {
        console.log('Unit created', unit);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(unit);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    Unit.findByIdAndUpdate(req.params.unitId, {
        $set: req.body
    }, { new: true})
    .then(unit => {
        console.log('Unit updated');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(unit)
    }) 
    .catch(err => next(err))
})
.delete((req, res) => {
    Unit.findByIdAndDelete(req.params.unitId)
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

artistportalRouter.route('/:userId')
.get((req, res, next) => {
    User.findById()
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch(err => next(err));
 })
 .post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /artistportal/:userId')
 })
 .put((req, res) => {
    User.findByIdAndUpdate(req.params.username, {
        $set: req.body
    }, { new: true})
    .then(user => {
        console.log('User updated');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user)
    }) 
    .catch(err => next(err))
 })
 .delete((req, res, next) => {
     Unit.deleteMany()
     .then(response => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(response);
     })
     .catch(err => next(err));
 });

 artistportalRouter.route('/:userId/:unitId')
 .get((req, res, next) => {
    User.findById()
    .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    })
    .catch(err => next(err));
 })
 .post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /artistportal/:userId/:unitId')
 })
 .put((req, res) => {
   res.statusCode = 403;
   res.end('PUT operation not supported on /artisportal/:userId/:unitId')
 })
 .delete((req, res) => {
    res.statusCode = 403;
   res.end('DELETE operation not supported on /artisportal/:userId/:unitId')
 });
module.exports = artistportalRouter;