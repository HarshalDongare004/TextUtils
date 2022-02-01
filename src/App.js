// import logo from './logo.svg';

import React, {useState , Fragment} from 'react';

import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   // Routes,  ==> version 6
//   Switch,
//   Route,
  
// } from "react-router-dom";

// let name="<b>Harshal</b>"
function App() {
  const [mode, setMode] = useState('light'); //where dark mode is enable or not
  const [alert, setAlert] = useState(null); //where alert is shows

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has enabled", "success")
      // document.body.style.color = "white";  an experiment that change color

    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success")

      // document.body.style.color = "black";  n experiment that change color
    }
  }
  return (
    <Fragment>
    {/* <Router> */}

    
    {/* <Navbar title={45} aboutText="About us"></Navbar> */}
    {/* <Navbar></Navbar> */}
 <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}></Navbar> 
<Alert alert= {alert}/>
<div className='container my-3'>
      {/* <Switch>
        <Route exact path="/about">
          {<About />}
        </Route>   */}
        
        {/* <Route exact path="/"> */}
          {<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>}

        {/* </Route> */}
          
          
      {/* </Switch> */}
{/* <About /> */}
</div> 
{/*</Router> */} 

 </Fragment>
  )
}
export default App;
