const express = require("express");
const UserB = require("../model/schema");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");

//post   request
// server/user/register
const userRegister = async (req, res)=>{
    try {
        const {username,email,password} = req.body;
    if(!email||!username || !password){
        res.status(400);
        throw new Error("every credential is require");
    }
    const emailCheck = await UserB.findOne({email});
    if(emailCheck){
        res.status(400);
        throw new Error("User already exist");
    }
    const hashPassword = await bcrypt.hash(password,10)
    const user = await UserB.create({
        username,
        email,
        password:hashPassword,
    });
    res.send({user})
    console.log("user is created");
    } catch (error) {
        res.status(404).json({error:error.message}); 
    }
} 


const userLogin = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(401).json("all credential are require");
        }

        const user = await UserB.findOne({email});
        if(user && await bcrypt.compare(password,user.password)){
             
            const token = res.status(200).json(jwt.sign({
                user:{
                    username:user.username,
                    email:user.email,
                    password:user.password,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn :'20min'}
            ));
            // console.log("token:",token);
        }
        else{
             res.status(401).json("email or password is wrong");es
        }

    } catch (error) {
            res.status(404).json({error:error.message})
    }
};


const userCurrent = async(req,res)=>{
    res.status(200).json(req.user);
}


module.exports = {userRegister,userLogin,userCurrent};