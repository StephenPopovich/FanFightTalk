var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  zipcode: String
});


mongoose.model('User', UserSchema);
