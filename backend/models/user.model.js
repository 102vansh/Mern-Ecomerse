const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cartdata:{
        type:Object
    }
});

userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();

})
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}
userSchema.methods.generateToken = async function() {
    return jwt.sign({ id: this._id }, process.env.SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE});
}
module.exports = mongoose.model('User', userSchema)