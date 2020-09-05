import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './PostDetails.css';


const PostDetails = () => {
    const { postId } = useParams();
    const [comment, setComment] = useState([]);
    const [post, setPost] = useState([]);
    const [image, setImage] = useState([]);


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts?id=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setImage(data))
    }, [])


    // Match comment and photo id 
    const images = comment.map(comment => {
        const r = image.filter(img => img.id === comment.id);
        return r;
    });

    // Concat match comment
    function concat(images) {
        let a = [];
        for (let i = 0; i < images.length; i++) {
            const element = images[i];
            a.push(...element);
        }
        return a;
    }

    const matchImg = concat(images);

    return (
        <div>
            <Header></Header>
            {
                post.map(post => <div className="post" key={post.id}>
                    <h1>{post.title}</h1>
                    <h4>{post.body}</h4>
                    <img src="" alt="" />
                    <h3>{comment.length} Comments</h3>
                    <div className="comment-body">

                        {
                            comment.map(comment => <div className="comments" key={comment.id} >
                                <div className="pic">
                                    {
                                        matchImg.map(img => <img src={img.url} alt="" />)
                                    }
                                </div>
                                <h4>Email: {comment.email}</h4>
                                <p>{comment.body}</p>
                            </div>)
                        }

                    </div>
                </div>)
            }
        </div >
    );
};

export default PostDetails;