const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/doctorDatabase');

// mongoose.connect('mongodb://127.0.0.1:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },  // Fixed type definition
    password: { type: String, required: true }, // Fixed type definition
    UserDetail: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "userDetail"
    }]
});

module.exports = mongoose.model('User', UserSchema);