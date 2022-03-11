//Here we require the express router
const express = require('express');
//We are bringing in the function to create the aboutRouter
const aboutRouter = express.Router();

//Setting up/creating the About routes
aboutRouter.route('/')
.all((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
})

