var users = require('./../controllers/users.js');
var messages = require('./../controllers/messages.js');

var bodyParser = require('body-parser');


// This is our routes.js file located in server/config/routes.js
// This is where we will define all of our routing rules!
// We will have to require this in the server.js file (and pass it app!)
module.exports = function(app) {
  // for parsing application/json
   app.use(bodyParser.json());

   // for parsing application/x-www-form-urlencoded
   app.use(bodyParser.urlencoded({ extended: true }));


  app.post('/users', users.login)
  app.post('/messages', messages.create)
  app.get('/messages', messages.index)
  app.post('/messages/:id', messages.createComment)
  app.get('/messages/:id', messages.show)
}
