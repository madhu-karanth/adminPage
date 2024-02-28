const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    textEn : {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    textKan : {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    videoUrl : {
        type: String,
        required: true,
        max: 50,
        unique: true,
    }
})