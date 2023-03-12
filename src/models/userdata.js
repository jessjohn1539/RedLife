const mongoose =require("mongoose");
const validator = require("validator");

//database schema declaration for donor
const DonorSchema = mongoose.Schema({
    donorFName:{
        type: String,
        required:true,
        minLength: 4
    },
    donorGender:{
        type: String,
        required:true
    },
    donorDob:{
        type: Number,
        required: true
    },
    donorMobile:{
        type: Number,
        required: true,
        min: 10
    },
    bloodgroup:{
        type: Number,
        required: true
    },
    donorAddress:{
        type: String,
        required:true,
        minLength: 10
    },
    stateCode:{
        type: Number,
        required: true
    },
    donorPass:{
        type: String,    
        minLength: 10
    },
    confirmPas:{
        type: String,
        minLength: 10
    },
    date:{
        type:Date,
        default:Date.now
    }

})
const Donor = mongoose.model("Donor", DonorSchema );

module.exports = Donor;