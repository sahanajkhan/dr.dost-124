const mongoose = require("mongoose")

const doctorSchema=mongoose.Schema({
    eamil:String,
    password: String,
    UserDetail:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"doctordetail"
    }]
})

module.exports=mongoose.model("doctordb", doctorSchema)
