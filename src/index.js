import React from 'react';
import ReactDOM from 'react-dom';

                //JSX Expression     //WHERE TO SHOW
// ReactDOM.render(<h1>Hello World</h1>,document.getElementById('root'));

ReactDOM.render(
    <>
    <h1>NETFLIX</h1>
    <p>List of of top 5 netflix shows</p>
    <ol>
        <li>Stranger Things.</li>
        <li>Into the night.</li>
        <li>The Holo Love.</li>
        <li>Money Heist.</li>
        <li>Dark.</li>
    </ol>
    </>,
    document.getElementById('root'))
