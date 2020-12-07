var express= require('express');
var cors= require('cors');
var app= express();

var api_routes= require('./restapiroutes.js');
app.use('/api', api_routes);
app.use(cors());

app.use('/demo', express.static('frontend'));
//Start server

app.listen(process.env.PORT,  function(){
  console.log("Server is running!");
}
  //console.log(coursejson);
)
