import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './PostDetails.css';
import Comments from '../Comments/Comments';


const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);


    const { title, body } = post;


    return (
        <div>
            <Header></Header>
            <div className="post" key={post.id}>
                <h1>{title}</h1>
                <h4>{body}</h4>
                <Comments></Comments>
            </div>
        </div >
    );
};

export default PostDetails;