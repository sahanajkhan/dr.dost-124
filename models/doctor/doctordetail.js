const mongoose = require('mongoose');

const UserdetailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Fixed ObjectId typo
        ref: "doctordb",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    Specialization: {
        type: String,
        required: true
    },
    licenseNumber: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    hospitalName: {
        type: String,
        required: true // Fixed "requried" typo
    },
    password: {
        type: String,
        required: true // Fixed "requried" typo
    },
    confirmpassword: {
        type: String,
        required: true // Fixed "requried" typo
    }
});

module.exports = mongoose.model('doctordetail', UserdetailSchema);
