'use strict';

var seneca = require('seneca')();

seneca.add( {cmd:'bananas'}, function(args,callback){
  var bananas = {
    rate: 0.30
  }
  var value = bananas[args.prop]
  callback(null,{value:value})
});

seneca.listen();