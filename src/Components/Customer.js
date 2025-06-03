import React,{Component} from "react";

class Customer extends Component{
    constructor(){
        super();
        this.state={
            name:"Rohan",
            age: 25
        }

    }
    render(){
        const {name, age} = this.state;
        return(
            <div>
                <h1>{name}</h1>
                <h1>{age}</h1>
            </div>
        )
    }
}

export default Customer;