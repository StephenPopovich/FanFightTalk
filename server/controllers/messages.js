// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = (function() {

  return {
    show: function(req, res){
      Message.findOne({_id: req.params.id}).populate("user comments.user").exec(function(err, message){
        if(err) console.log(err);

        res.json(message);
      })
    },
    index: function(req, res){
      Message.find({}).populate("user comments.user").sort({created_at: -1}).exec(function(err, messages){
        res.json(messages);
      })
    },
    create: function(req, res){

      var message = new Message(req.body);
      message.save(function(err){
        if(err)console.log(err);
        res.json(true);
      })

    },
    createComment: function(req, res){
      Message.findOne({_id: req.params.id}, function(err, message){
        if(err) console.log(err);

        message.comments.push(req.body);

        message.save(function(err){
          res.json(true);
        })


      })

    }
  }

})();