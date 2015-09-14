// redeploy is required when this file is modified
//------------------------------------------------

var express = require('express');

exports = module.exports = {
  sources: [   // define source module table
    'trunk.js',
  ],
  
  routers: [   // define root-router table
    ['/', express.Router()],
  ],
};

exports.modules = {};
exports.sources.forEach( function(item) {
  exports.modules[item] = {};
});
