import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    useTitle('Review');
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('albert-token')}`
            }
        })
            .then(res =>  res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })

    }, [user?.email])

    // delete 
    const handleDelete = (id) => {
        const procced = window.confirm('Are your sure to delete your review');
        if (procced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('delete successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }
    return (
        <div>
            {
                reviews.length === 0 ? <><h1 className='text-center font-bold text-red-500 text-4xl py-10'>You Have No Review Here</h1></>
                    :
                    <>
                        <h2 className='text-center font-bold text-3xl text-blue-600'>your have {reviews.length} reviews</h2>
                    </>
            }
            <div>
                {
                    reviews.map(allreview => <ReviewRow
                        key={allreview._id}
                        allreview={allreview}
                        handleDelete={handleDelete}
                    ></ReviewRow>)
                }
            </div>
        </div>
    );
};

export default Review;