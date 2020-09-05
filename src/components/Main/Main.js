import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

const Main = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <Header></Header>
            {
                posts.map(post => <Posts post={post} key={post.id}></Posts>)
            }

        </div>
    );
};

export default Main;