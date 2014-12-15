'use strict';

var seneca = require('seneca');

seneca.add(
  {role:'math', cmd:'product'},
  function(args, callback) {
    let product = args.left * args.right;
    callback(null, {answer: product});
  }
)

seneca.use('transport');

var connect = require('connect');

var app = connect()
  .use(connect.json())
  .use(seneca.service())
  .listen(10171);