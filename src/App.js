import logo from './logo.svg';
import './App.css';
import Greet  from './Components/Greet';
import Welcome  from './Components/Welcome';
import Hello  from './Components/Hello';
import HelloMessage from './Components/HelloMessage'; 
import Class  from './Components/Class';
import Student from './Components/Student';
import Employee from './Components/Employee';
import Customer from './Components/Customer';
import Click from './Components/Click';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ChildComponent';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';


function App() {
  const name="rohit";
  if(name=="Rohan"){
    return <Component1/>
  }else{
    return <Component2/>
  }
}

export default App;
