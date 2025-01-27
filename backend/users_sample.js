const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/futta')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

const schema = mongoose.Schema;

const userSchema = new schema({
  email: { type: String, required: [true, 'Name is required'] },
  password: { type: Number, required: [true, 'Age is required'] } 
});

const User = mongoose.model('User', userSchema);

// Example usage:
const newUser = new User({name:'elizabeth', age: 30 }); // Missing 'name' field

newUser.save()
  .then(user => console.log('User created:', user))
  .catch(err => console.error('Error creating user:', err));