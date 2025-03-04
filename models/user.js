const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  
});
// models/user.js
// ... userSchema above
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      delete returnedObject.hashedPassword;
    }
  });
  
// Export model
module.exports = mongoose.model('User', userSchema);