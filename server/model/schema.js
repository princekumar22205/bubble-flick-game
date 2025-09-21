const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    usernmae:{
        type: String,
        require:[true,"Please add the username"],
    },
    email:{
        type:String,
        require:[true,"Please add the email"],
    },
    password:{
        type:String,
        require:[true,"Please add the passwors"],
    },
},
{
    timestamp: true,
}
)

module.exports = mongoose.model("UserB",UserSchema);