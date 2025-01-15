const express = require("express");
const cors=require('cors')
const dotenv = require("dotenv");
dotenv.config();
const db=require("./config/dbconfig")
const Review = require("./models/Reviews");

const app = express();
app.use(cors())
app.use(express.json());

//connecting to the database
db.dbConnect()
//home route for displaying
app.get("/reviews/all",async (req,res)=>
    {
        let allreview=await Review.find
        ({})
        res.send(allreview)
    })
app.get("/reviews/:id",async (req,res)=>
{
    let searchedreview=await Review.find
    ({"movieid":req.params.id})
    res.send(searchedreview)
})


app.post("/reviews/add", async (req, res) =>
{
try
    {
        const newReview = new Review(req.body);
        // {
            // movieid: 1,
            // moviename: "test",
            // moviereview: "test review",
            // movieratings: 3,
        // });
        await newReview.save();
console.log("successfully inserted");
res.send("Review successfully inserted");
    }
catch (error)
    {
        res.send("Error inserting review: " + error.message);
    }
});
app.delete("/reviews/:id", async (req,res)=>{
    let delReview=await Review.findOneAndDelete({"movieid":req.params.id})
    console.log(delReview)
    if(delReview)
    {
        res.send(`successfullt deleted review of ${delReview.moviename}`)
    }
})

//starting the server on PORT 5000
app.listen(5000,()=>console.log("server running successfully"))