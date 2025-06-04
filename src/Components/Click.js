import React,{Component} from 'react';


class Click extends Component {
   
    render(){
        const HelloFunction=(name)=>{
            alert("Hello "+name);
        }
        return(
            <div>
                <button onClick={()=>HelloFunction("Amit")}>Click Me</button>
            </div>
        )
    }
}

export default Click;