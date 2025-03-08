const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Fixed the typo here
        ref: "user",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneN: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: [String],
        required: true
    },
    Role: {
        type: [String],
        required: true
    },
    region: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model("userDetail", userDetailSchema);
