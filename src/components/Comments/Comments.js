import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Comments.css';
import Images from '../Images/Images';


const Comments = () => {
    const { postId } = useParams();
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, []);


    return (
        <div>
            <h3>{comment.length} Comments</h3>
            <div className="commentStyle">
                <div>
                    {comment.length && <Images len={comment.length} ></Images>}
                </div>
                <div className="comment">
                    {
                        comment.map(comment => <div>
                            <h4>{comment.email}</h4>
                            <p>{comment.body}</p>
                            <hr />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Comments;