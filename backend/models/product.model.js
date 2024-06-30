const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    id:{
type:Number
    },
    name: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        
    },
    image:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    date:{
        type:Date,
        default:Date.now
    },
    size:{
        type:String,
        enum:["S","M","L","XL","XXL"]
    }
});

module.exports = mongoose.model("Product", productSchema);