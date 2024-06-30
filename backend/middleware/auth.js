const jwt = require("jsonwebtoken");
const User = require('../models/user.model')

exports.isauth = async (req, res, next) => {    
try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "Please Login to access this resource" });
    }
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    
    req.user = await User.findById(decoded.id);
    console.log(req.user);
    if (!req.user) {
        return res.status(401).json({ success: false, message: "User not found" });
    }
    next();
} catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
}
}

// const {ErrorHandler} = require('../middleware/error')
// const jwt = require('jsonwebtoken')
// const User = require('../models/user.model')
// exports.isauth = async(req,res,next) =>{
//     try{
// const {token} = req.cookies
// if(!token){
    
//     return next(new ErrorHandler("token is not in cookie",500))
// }
// const decoded = await jwt.verify(token,process.env.SECRET_KEY)
// req.user = await User.findById(decoded.id)
// // res.status(201).json({
// //     success:true,
// //     message:'User token find Successfully',
    
// // })
// next()
//     }catch(error){
// return next(error)
//     }
// }

