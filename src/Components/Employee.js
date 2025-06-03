import React ,{Component} from "react"; 
class Employee extends Component{
    constructor(){
        super();
        this.state={
            name:1
        }
    }
    changeName(){
        this.setState({
            name:this.state.name + 1
        })
    }
    render(){
        return(
            <div>
                <h1> Hello {this.state.name}</h1>
                <button onClick={()=>this.changeName()}>Click me</button>
            </div>
        )
    }
}

export default Employee;