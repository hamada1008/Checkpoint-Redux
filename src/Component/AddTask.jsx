import React, { useState } from "react";
import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import {
  addnote,
} from "../Redux/actions";

const AddTask = () => {
  const items = useSelector((state) => state.bigReducer);
  const [fillter, setFillter] = useState("all");
  const dispatch = useDispatch();
  function addtask(e) {
    e.target.previousSibling.value !== "" &&
      dispatch(addnote(e.target.previousSibling.value));
    e.target.previousSibling.value = "";
  }
  function addtask2(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      dispatch(addnote(e.target.value));
      e.target.value = "";
    }
  }

  function filterTask(e) {
   
    switch (e.target.value) {
      case "Done":   setFillter("done");break;
      case "NotDone": setFillter('notdone'); break;
      case "All" : setFillter("all");break;
      default:
    }
  }
  


  return <div className="List">
      <header>
        <h1>To-Do-List</h1>
        <input
          type="text"
          placeholder="Add a task to do"
          onKeyPress={addtask2}
        />
        <button className="addbtn" onClick={addtask}>
          +
        </button>
        <select className="filter" name="filter" onChange={filterTask}>
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="NotDone">Not Done</option>
        </select>
      </header>
      {fillter==="done"? items.filter(el => el.isDone === true).map(
            (el) =>
              el.description !== "" && (
                <Task
                  id={el.id}
                  key={el.id}
                  desc={el.description}
                  dn={el.isDone}
                />))
                :
            fillter ==="notdone"?  items.filter(el => el.isDone === false).map(
              (el) =>
                el.description !== "" && (
                  <Task
                    id={el.id}
                    key={el.id}
                    desc={el.description}
                    dn={el.isDone}
                  />))
                : items.map((el) =>
                el.description !== "" && (
                  <Task
                    id={el.id}
                    key={el.id}
                    desc={el.description}
                    dn={el.isDone}
                  />))   
          
                }
    </div>
  
}

export default AddTask;
