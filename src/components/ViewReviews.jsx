import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewReviews() {
    // State to store reviews coming from the backend
    const [reviews, setReviews] = useState([]);

    // Using axios call inside useEffect to fetch while the component loads
    useEffect(() => {
        axios
            .get('http://localhost:5000/reviews/all')
            .then((response) => {
                console.log(response.data);
                setReviews(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Function to handle review deletion
    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this review?');
        if (confirmDelete) {
            axios
                .delete(`http://localhost:5000/reviews/${id}`)
                .then((response) => {
                    console.log(response.data);
                    //To update reviews on the frontend by excluding deleted review
                    setReviews(reviews.filter((review) => review.movieid !== id));
                    useFetch();
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    return (
        <>
            <div className="container">
                <h2 className="my-4">All Reviews</h2>
                <hr />
                {reviews.length === 0 && <h4 className="alert alert-danger">Failed to Fetch</h4>}
                <div className="row">
                    {reviews.map((review) => (
                        <div className="col-md-4 mb-4" key={review.movieid}>
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Movie: {review.moviename}</h5>
                                    <p className="card-text text-danger">Ratings: {review.movieratings}/5</p>
                                    <a href={`/review/${review.movieid}`} className="btn btn-primary mt-auto">
                                        Read Review
                                    </a>
                                    <button
                                        className="btn btn-danger mt-2"
                                        onClick={() => handleDelete(review.movieid)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <a className="btn btn-success mt-4" href="/addreview">
                        Post A Review
                    </a>
                </div>
            </div>
        </>
    );
}

export default ViewReviews;