const express = require('express');
const downloadsRouter = express.Router();
const authenticate = require('../authenticate');
const cors = require('./cors');

downloadsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
   try {
       const file = `./public/files/WorkofArt2020Web.pdf`;
       res.download(file);
       console.log('here');
    } catch(err) {
            console.log(err);
    }

})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /downloads')
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /downloads');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /downloads');
});

module.exports = downloadsRouter;