import React from "react";


function HelloMessage(props){
    return (
        <div>
        <h1>Hello {props.name}! My age is {props.age}</h1>
        </div>
    )
}

export default HelloMessage;