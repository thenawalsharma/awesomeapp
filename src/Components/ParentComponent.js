import React,{Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{
    ParentMethod=(childName)=>{
        alert('Hello from Parent '+childName);
    }

    render(){
        return (
            <div>
                <ChildComponent callMethod={this.ParentMethod('Rohan')}> </ChildComponent>
            </div>
        )
    }
}

export default ParentComponent;