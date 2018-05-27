var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: String,
  gender: String,
  date_created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
