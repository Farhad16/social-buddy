import React, { useState, useEffect } from 'react';
import './Images.css'

const Images = (props) => {
    const [image, setImage] = useState([])

    console.log(props.len);
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${props.len}`)
            .then(res => res.json())
            .then(data => {
                const info = data['results']
                setImage(info)
            })
    }, [])


    return (
        <div className="imageStyle">
            {image.map((img) => <p><img src={img.picture['thumbnail']} key={img.id.value} alt='' /></p>)}
        </div>
    );
};

export default Images;