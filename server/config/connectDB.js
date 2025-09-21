const mongoose = require("mongoose");


const connectDB = async()=>{
    try {
        console.log("Mongo URI:", process.env.CONNECTION_STRING);
        await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database is connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;