import React from "react";
import "./index.css";
import AddTask from "./Component/AddTask"
const App = () => {


function help () {
  return alert(`How to use:
  - Click on the taks to check/uncheck it
  - Click on edit to edit the task (an editable task cannot be checked)
  - After  uneditting a task you need to either press 'Enter' or click the same edit button again `)
}

  return (<div className='app'>
  <button className="help" onClick={help}>?</button>
 <AddTask/>
 </div>
  )
};

export default App;
