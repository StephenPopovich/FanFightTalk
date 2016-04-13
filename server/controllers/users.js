// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {

  return {

    login: function(req, res){

      //this method will be responsible for finding out
      //if a user already exists in our system!
      console.log(req.body);

      User.findOne({name: req.body.name, zipcode: req.body.zipecode}, function(err, user){
        if(err) console.log(err);
        else if(user) res.json(user);
        else{
          //do something - such as create the user!
          var newUser = new User(req.body);
          newUser.save(function(err){
            if(err) console.log(err);
            else if(!err) res.json(newUser);
          })


        }


      })

    }

  }

})();
