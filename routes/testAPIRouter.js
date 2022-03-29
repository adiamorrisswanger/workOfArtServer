const express = require('express');
const testAPIRouter = express.Router();

testAPIRouter.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = testAPIRouter;