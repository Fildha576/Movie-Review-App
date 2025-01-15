import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function AddReview()
{
    const [id,setId]=useState(0);
    const [moviename,setMoviename]=useState("");
    const [moviereview,setMoviereview]=useState("");
    const [rating,setRating]=useState(1);
    const [error,setError]=useState("");//to show error in posting review
    const navigate=useNavigate();//navigating from react
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        // console.log("id is",id);
        // console.log("name is",moviename);
        // console.log("review is",moviereview);
        // console.log("rating is",rating);
        const data={"movieid":id,"moviename":moviename,"moviereview":moviereview,"movieratings":rating}
        axios.post('http://localhost:5000/reviews/add',data)
        .then(function (response) {
        console.log(response.data);
        console.log("Sucessfully Inserted")
        navigate('/viewreviews')
        })
        .catch(function (error) {
         console.log(error);
            setError(error.message)
             })
    }
    return(
        <>
        <h2>Review Submission Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label for="exampleFormControlInput1">Movie ID</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Movie Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e)=>setMoviename(e.target.value)}/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Movie Review</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e)=>setMoviereview(e.target.value)}/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Movie Rating</label>
            <select className="form-control" id="exampleFormControlSelect1" onChange={(e)=>setRating(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary m-3">Post Review</button>
        </form>
        {error && <h2 className="text-danger">{error}</h2>}
        </>
    )
}

export default AddReview;