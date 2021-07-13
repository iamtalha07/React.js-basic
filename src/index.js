import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = "Talha";
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const link = "https://www.google.com"

ReactDOM.render(
    <>
        <h1 className="heading">My Name is {name}</h1>
        <div className="img_div">
        <img src={img1} alt="No Image"/>
        <img src={img2} alt="No Image"/>
        <a href={link}>
        <img src={img3} alt="No Image"/>
        </a>
        </div>
    </>,
    document.getElementById('root')
);