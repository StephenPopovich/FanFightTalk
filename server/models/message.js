var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comments = new Schema({
    comment: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: Date.now}
});

var MessageSchema = new mongoose.Schema({
  message: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  comments: [Comments],
  created_at: {type: Date, default: Date.now}
});


mongoose.model('Message', MessageSchema);
