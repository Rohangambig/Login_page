import './App.css';
import  Login from './Login.jsx';
import Register from './Register.jsx';
import React, {useState} from 'react';
function App() {
  const [currentform,setform] = useState('');
  const toggleForm =(formName) =>{
    setform(formName);
  }
  return (

    <div className="App">
    {
      currentform === 'Login'?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
    }
   
    </div>
  );
}

export default App;
