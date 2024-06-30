const Product = require('../models/product.model')
const cloudinary = require('cloudinary').v2
exports.createproduct = async(req,res,next) =>{
    try{
const{name,new_price,old_price,category,id}=req.body
const {image} = req.files
const cloudinaryres = await cloudinary.uploader.upload(image.tempFilePath)
if (!cloudinaryres || cloudinaryres.error) {
    console.error(
      "Cloudinary error:",
      cloudinaryres.error || "Unknown cloudinary error!"
    );
  }
const product = new Product({name,new_price,old_price,category, image:{
    public_id:cloudinaryres.public_id,
    url:cloudinaryres.secure_url
}})
product.save()
res.status(200).json({
    success:true,
    message:"product created successfully",
    product
})
    }catch(error){
    }
}
exports.getproduct = async(req,res,next) =>{
    try{
const product =  await Product.find({})
res.status(200).json({
    success:true,
    message:"product created successfully",
    product
})
    }catch(error){
        return next(error)
    }
}
exports.deleteproduct = (req,res,next) =>{
    try{
        const id = req.params.id
const product = Product.findByIdAndDelete(id)
res.status(200).json({
    success:true,
    message:"product deleted successfully",

})
    }catch(error){
        return next(error)
    }
}
exports.newcollection = async(req,res,next) =>{
    try{
let products = await Product.find({})
let newcollection = products.slice(1).slice(-8)
console.log(newcollection)
res.status(200).json({
    success:true,
    message:"product newcollection successfully",
    newcollection
})
    }catch(error){
        return next(error)
    }
}
exports.poularinwomen = async(req,res,next) =>{
try{
let product = await Product.find({category:"women"})
let poularinwomens = product.slice(0,4)
res.status(200).json({
    success:true,
    message:"product poularinwomen successfully",
    poularinwomens
})
}catch(error){
return next(error)
}
}