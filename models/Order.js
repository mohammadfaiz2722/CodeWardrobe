const mongoose=require('mongoose')
// import { Schema } from 'mongoose'
const orderSchema=new mongoose.Schema({
    userID:{type:String,required:true},
    products:[{
        productId:{type:String},
        quantity:{type:Number,default:1}
    }],
   address:{
    type:String,
    required:true,

   },
   amount:{
    type:Number,
    requiured:true
   } ,
   status:{
type:String,
default:'Pending',
required:true
   },
},{timestamps:true});

const Product = mongoose.models.Order ||  mongoose.model("Order",orderSchema)