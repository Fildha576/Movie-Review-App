const mongoose=require("mongoose")
const dotenv = require('dotenv')
const dbConnect=async ()=>
{
    try
    {
        await mongoose.connect("mongodb://127.0.0.1:27017")
        console.log("Successfully Connected to MongoDB");
    }
    catch(error)
    {
        console.log("An error occured",error.message);
    }
}

module.exports = {dbConnect}