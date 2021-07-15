import React from 'react';
import add,{sub,mul,div} from './Calc';

function App(){
    return(
    <>
    <ul>
        <li>Addition:{add(40,4)}</li>
        <li>Subtraction:{sub(40,4)}</li>
        <li>Multiplication:{mul(40,4)}</li>
        <li>Division:{div(40,4)}</li>
    </ul>
    </>
    );
}

export default App;