const mongoose=require('mongoose')
// import { Schema } from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},


},{timestamps:true});

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;