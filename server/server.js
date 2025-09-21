const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const dotenv = require("dotenv").config();

connectDB();
app.use(express.json());
app.use("/user", require("./routes/User"));

app.use("/server/user",require("./routes/User"));

app.listen( 5000,()=>{
    // res.send("server is running on port 5000");
    console.log("server is running on port 5000")
})



