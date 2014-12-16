var connect = require('connect');
var bodyParser = require('body-parser')

connect()
  .use(bodyParser.urlencoded())
  .use(function(req, res) {
    res.end('viewing user ' + req.body.user.name);
  });