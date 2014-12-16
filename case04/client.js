'uses strict';

var seneca = require('seneca')();

seneca.add( {cmd:'salestax'}, function(args,callback){
  seneca.act( {cmd:'config', prop:'rate'}, function(err,result){
    var rate  = parseFloat(result.value)
    var total = args.net * (1+rate)
    callback(null,{total:total})
  })
})

// local rates
seneca.add( {cmd:'salestax',country:'US'}, function(args,callback){
  var state = {
    'NY': 0.04,
    'CA': 0.0625
    // ..
  }
  var rate = state[args.state]
  var total = args.net * (1+rate)
  callback(null,{total:total})
})


// categories
seneca.add( {cmd:'salestax',country:'IE'}, function(args,callback){
  var category = {
    'top': 0.23,
    'reduced': 0.135
    // ...
  }
  var rate = category[args.category]
  var total = args.net * (1+rate)
  callback(null,{total:total})
})

// seneca.add( {cmd:'bananatax'}, function(args,callback){
//   seneca.act( {cmd:'bananas', prop:'rate'}, function(err,result){
//     var rate  = parseFloat(result.value)
//     var total = args.net * (1+rate)
//     callback(null,{total:total})
//   })
// })

seneca.client()

var shop = seneca.pin({cmd:'*'})

shop.salestax({net:100}, function(err,result){
  console.log( result.total )
})

// shop.bananatax({net:1000}, function(err,result){
//   console.log( result.total )
// })

shop.salestax({net:100,country:'DE'}, function(err,result){
  console.log( 'DE: '+result.total )
})

shop.salestax({net:100,country:'US',state:'NY'}, function(err,result){
  console.log( 'US,NY: '+result.total )
})

shop.salestax({net:100,country:'IE',category:'reduced'}, function(err,result){
  console.log( 'IE: '+result.total )
})