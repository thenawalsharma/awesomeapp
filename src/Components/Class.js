import React,{Component} from "react";
class Class extends Component{
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} and My age ={this.props.age}!</h1>
            </div>
        )

    }
}

export default Class;