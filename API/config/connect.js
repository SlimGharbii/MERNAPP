const mongoose = require('mongoose');

require('dotenv').config({path:"./config/.env"}
)
const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB")
}
catch (error){
    console.log(error)
}
}
module.exports=connect
