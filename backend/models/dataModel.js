const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    joke:{
        setup:{
            type: String,
            required: true,
        },
        punchline:{
            type: String,
            required: true,
        }
    }
})
 
module.exports = mongoose.model("Data", dataSchema);