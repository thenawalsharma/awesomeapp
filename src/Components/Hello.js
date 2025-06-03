import React  from "react";

let a= 1;
let msg ="";
if(a>5){
    msg="Hello!";
}
else{
    msg="Goodbye!";
}

function Hello(){
    return(
        <div>
            <h1>Hello, Guys!</h1>
            <h3>{msg}</h3>
        </div>
    )
}

export default Hello;