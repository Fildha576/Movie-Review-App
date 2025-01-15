const mongoose=require("mongoose")
const reviewSchema=new mongoose.Schema({movieid:{type:Number,required:true},
moviename:{type:String,required:true},
moviereview:{type:String},
movieratings:{type:Number,required:true,min:1,max:5}})

module.exports = mongoose.model("Review", reviewSchema);