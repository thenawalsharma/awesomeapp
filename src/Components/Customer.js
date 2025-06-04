import React,{Component} from "react";

function Customer({name,age}){
    return(
        <div>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </div>
    )
}

export default Customer;