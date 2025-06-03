import React,{Component} from 'react';

class Student extends Component {
    constructor(props){
        super(props);
        console.log("Constructor called");
    }
    render() {
        return(
            <div>
                <h1>Hello World{this.props.name}</h1>
            </div>
        )
    }
}

export default Student;