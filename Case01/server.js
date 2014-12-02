var seneca = require('seneca')()

seneca.add( 
  {role:'math', cmd:'sum'}, 
  function(args,callback) {
    var sum = args.left + args.right
    callback(null,{answer:sum})
  }
)

seneca.act( 
  {role:'math', cmd:'sum', left:1, right:2}, 
  function(err,result) {
    if( err ) return console.error( err )
    console.log(result)
  }
)

seneca.add( 
  {role:'math', cmd:'product'}, 
  function(args,callback) {
    var product = args.left * args.right
    callback(null,{answer:product})
  }
)

seneca.act( 
  {role:'math', cmd:'product', left:3, right:4}, 
  function(err,result) {
    if( err ) return console.error( err )
    console.log(result)
  }
)