var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./server/config/mongoose.js');
var route_setter = require('./server/config/routes.js')(app);

app.listen(8888, function(){
  console.log("Hey Ryan! Whats up? FAN FIGHT TALK IS NOW ONLINE...");
})
