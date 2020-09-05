import React from 'react';
import { Button } from '@material-ui/core';
import './Posts.css';
import { useHistory } from "react-router-dom";

const Posts = (props) => {
    const { title, body, id } = props.post;


    const history = useHistory();
    const handleShowPost = () => {
        history.push(`/post_details/${id}`);
    }
    return (
        <div className="post">
            <h4>Post title: {title}</h4>
            <p><strong> Post Body: </strong>{body}</p>
            <Button variant="contained" color="primary" onClick={() => { handleShowPost(id) }}>Show More</Button>
        </div >

    );
};

export default Posts;