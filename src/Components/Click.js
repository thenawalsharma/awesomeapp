import React,{Component} from 'react';

function Click(){
    const helloFunction = (name) => {
        alert(`Hello ${name}`);
    }
    return(
        <div>
            <button onClick={()=>helloFunction("Rohit")}>Click</button>
        </div>
    )
}

export default Click;