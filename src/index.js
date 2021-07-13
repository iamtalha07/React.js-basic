import React from 'react';
import ReactDOM from 'react-dom';

                 //JSX Expression     //WHERE TO SHOW
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));

const fname = "talha";
const lname = "Ishaq";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <h1>Hello, My Name is {fname +" "+ lname}</h1>
    <p>Current Date = {date}</p>
    <p>Current Time = {time}</p>
    </>,
    document.getElementById('root')
);
 