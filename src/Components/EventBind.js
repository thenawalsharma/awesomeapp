import React,{Component}from 'react';

class EventBind extends Component{
    constructor(){
        super();
        this.HelloEvent= this.HelloEvent.bind(this);
        this.state={
            name:"Amit"
        }
    }
    HelloEvent=()=>{
        console.log("Hello",this);
        this.setState({
            name:"Rohan"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.HelloEvent}>Click</button>
                </div>
        )
    }
}

export default EventBind;