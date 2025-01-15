import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Singlereview() {
    const { id } = useParams();
    const [review, setReview] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:5000/reviews/${id}`)
            .then((response) => {
                setReview(response.data[0]);
                console.log(response.data[0])
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [id]);

    return (
        <div className="container my-5">
            <h2 className="mb-4">Review Details</h2>
            <hr />
                <div className="table-responsive">
                    <table className="table table-bordered table-success border-danger">
                        <thead className="thead-dark">
                            <tr>
                                <th>Field</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody  class="table-group-divider">
                            <tr>
                                <td>Movie ID</td>
                                <td>{review.movieid}</td>
                            </tr>
                            <tr>
                                <td>Movie Name</td>
                                <td>{review.moviename}</td>
                            </tr>
                            <tr>
                                <td>Review</td>
                                <td>{review.moviereview || 'No review provided'}</td>
                            </tr>
                            <tr>
                                <td>Ratings</td>
                                <td>{review.movieratings}/5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default Singlereview;