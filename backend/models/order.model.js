const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

userid:{
    type:String,
    
},
items:{
    type:Array,
},
amount:{
    type:Number,
    
},
address:{
    type:Object,
    
},
status:{
    type:String,
    default:"Not processed"
},
date:{
    type:Date,
    default:Date.now
},
payment:{
    type:Boolean,
    default:false
},
size:{
    type:String,
    default:"xl"
}


})

module.exports = mongoose.model('Order',orderSchema)