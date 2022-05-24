const express = require('express');
const downloadsRouter = express.Router();
const authenticate = require('../authenticate');
const cors = require('./cors');

const fs = require('fs');
const zip = require('adm-zip');
const AdmZip = require('adm-zip');

downloadsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
//Maybe I want POST instead of GET to disable that automatic download...Doesnt seem to matter
.get(cors.cors, (req, res) => {
    //Look at stack overflow example for server and client code
    /* if(response.ok) {
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
        } */
        res.statusCode = 403;
        res.end('GET operation not supported on /downloads');
    })
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    const zip = new AdmZip()   
    const outputFilePath = Date.now() + 'file.zip';
    zip.addLocalFile('./public/files/WorkofArt2020Web.pdf');
    fs.writeFileSync(outputFilePath, zip.toBuffer());
    res.download(outputFilePath, (err) => {
            console.log(err);
    })
   }
)
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /downloads');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /downloads');
});

module.exports = downloadsRouter;