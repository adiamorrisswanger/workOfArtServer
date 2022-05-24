const express = require('express');
const downloadsRouter = express.Router();
const authenticate = require('../authenticate');
const cors = require('./cors');

downloadsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
//Maybe I want POST instead of GET to disable that automatic download...Doesnt seem to matter
.get(cors.cors, (req, res) => {
    //Look at stack overflow example for server and client code
    if(response.ok) {
        res.setHeader('Content-Disposition', 'attachment;');
        res.setHeader('Content-Type', 'application/pdf')
        res.download('./public/files/WorkofArt2020Web.pdf', 'WorkOfArt2020.pdf', function (err) {
        if (err) {
            console.log('Your file could not be downloaded' + err);
        } else {
            console.log('File downloaded');
        }
    })
    } else {
            console.log('Your file could not be downloaded');
        }
    })
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /downloads');
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