'use strict';

var seneca = require('seneca')();

seneca.add( {cmd:'config'}, function(args,callback){
  var config = {
    rate: 0.25
  }
  var value = config[args.prop]
  callback(null,{value:value})
});

seneca.listen();