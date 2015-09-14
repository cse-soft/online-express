// static head of plugin source
//-----------------------------
var path = require('path'),
    main = require(path.join(__dirname,'main'));

var M = exports = module.exports = main.modules['trunk.js'];

// onload() will be called for every online-update
//------------------------------------------------
M.onload = function(app) {

var rootRouter = main.routers[0][1];

rootRouter.regist('GET','/', function(req,res,next) {
  res.render('index', { title: 'Express' });
});

};  // end of M.onload()
