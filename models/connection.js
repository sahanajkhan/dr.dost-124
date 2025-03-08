const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Corrected ObjectId spelling
        ref: "user",
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId, // Corrected ObjectId spelling
        ref: "doctordb",
        required: true
    },
    connectedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("connection", connectionSchema);
