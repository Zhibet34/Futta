const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/futta')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, required: [true, 'Name is required'] },
  age: { type: Number, required: [true, 'Age is required'] } 
});

const User = mongoose.model('User', userSchema);

module.exports = User;