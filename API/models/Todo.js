const mongoose = require('mongoose');

const Todoschema = new mongoose.Schema({
    text :{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    timestamp:{
        type: String,
        default:Date.now()
    }
});
module.exports=mongoose.model("Todoschema",Todoschema);