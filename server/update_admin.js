const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/nimbusboilers')
  .then(async () => {
    console.log('Connected to MongoDB');
    const user = await User.findOne({email: 'admin@nimbus.com'});
    if (user) {
      user.password = 'password123';
      await user.save();
      console.log('Admin password updated to password123');
    } else {
      console.log('No admin user found');
    }
    mongoose.disconnect();
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });