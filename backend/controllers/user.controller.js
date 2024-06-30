const User = require('../models/user.model')
const {ErrorHandler} = require('../middleware/error')

exports.createUser = async (req, res,next) => {
    try {
const {name,email,password} = req.body
console.log(req.body)
console.log(name,email,password)
if(!name || !email || !password){
    return next(new ErrorHandler('Please provide name, email and password', 400))
}
let user  = await User.findOne({email})
if(user){
    return next(new ErrorHandler('User already exists', 400))
}
let cart={}
for (let i = 0; i < 300; i++) {
    cart[i] = 0
}   
 user = await User.create({
    name,
    email,
    password,
    cart
})
console.log(user)
res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    
        user
    

})
    }catch(error){
return next(error)
    }

}
exports.loginUser = async (req, res,next) => {
    try {
const {email, password} = req.body
if(!email || !password){
    return next(new ErrorHandler('Please provide email and password', 400))
}
const user = await User.findOne({email})
if(!user){
    return next(new ErrorHandler('Invalid credentials', 401))
}
const isMatch = await user.comparePassword(password)
if(!isMatch){
    return next(new ErrorHandler('Invalid credentials', 401))
}
const token = await user.generateToken()
const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true
}
res.status(200).cookie("token",token,options).json({
    status: 'success',
    message: 'User logged in successfully',
    
        user,
        token
    
})
    }catch(error){
return next(error)
    }
}



// exports.addtocart = async (req, res,next) => {
//     try{
// let userdata = await User.findById(req.user._id)
//  userdata.cartdata[req.body.itemid] += 1
//  await User.findByIdAndUpdate(req.user._id, userdata.cartdata)
//  res.status(200).json({
//     status: 'success',
//     message: 'Item added to cart successfully',
    
//         userdata
    
// })
//     }catch(error){
//         return next(error)
//     }
// }

exports.addtocart = async (req, res, next) => {
    try {
        // Logging request user ID and item ID for debugging
        console.log('User ID:', req.user ? req.user._id : 'Undefined');
        console.log('Item ID:', req.body.itemid);

        if (!req.user || !req.user._id) {
            return res.status(400).json({
                success: false,
                message: 'User not authenticated',
            });
        }

        let userdata = await User.findById(req.user._id);

        if (!userdata) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        if (!userdata.cartdata) {
            userdata.cartdata = {}; // Initialize cartdata if it doesn't exist
        }

        if (!userdata.cartdata[req.body.itemid]) {
            userdata.cartdata[req.body.itemid] = 0; // Initialize item count if it doesn't exist
        }

        userdata.cartdata[req.body.itemid] += 1;

        await User.findByIdAndUpdate(req.user._id, { cartdata: userdata.cartdata });

        res.status(200).json({
            status: 'success',
            message: 'Item added to cart successfully',
            userdata,
        });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        return next(error);
    }
};


exports.removecartdata = async (req, res,next) => {
    try{
let userdata = await User.findById(req.user._id)
 userdata.cartdata[req.body.itemid] -= 1
 await User.findByIdAndUpdate(req.user._id, userdata.cartdata)
 res.status(200).json({
    status: 'success',
    message: 'Item removed from cart successfully',
    
        userdata
    
})
    }catch(error){
        return next(error)
    }
}

exports.getcartdata = async (req, res,next) => {
    try{
let userdata = await User.findById(req.user._id)
res.status(200).json({
    status: 'success',
    message: 'Cart data fetched successfully',
    
        userdata
    
})
    }catch(error){
        return next(error)
    }
}