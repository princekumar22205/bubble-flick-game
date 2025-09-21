const jwt = require("jsonwebtoken");

const validateToken = async(req,res,next) =>{
    let token ;
    let authHeader = req.headers.Authorization || req.headers.authorization ;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decode)=>{
            if(err){
                res.status(401);
                throw new Error("user is not authorized");
            }
            req.user = decode.user;
            next();
        })
        if(!token){
            res.status(401);
            throw new Error("Either user is not authorised or token is missing");
        }
    }
}

module.exports = validateToken;