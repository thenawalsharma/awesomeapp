import React from 'react';

function HelloFunction(){
    alert("Hello, World!");
}

function Click(){
    return(
        <div>
            <button onClick={HelloFunction}>Click me</button>
        </div>
    )
}

export default Click;