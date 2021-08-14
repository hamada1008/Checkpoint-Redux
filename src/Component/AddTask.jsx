import React from 'react'
import Task from "./Task"
import { useSelector, useDispatch } from 'react-redux'
import { addnote , filterminus,filterreset, removenote} from '../Redux/actions'
import tasklist from './ListTask'

const AddTask = () => {

    const added = useSelector (state => state.adder)
    const remove = useSelector(state => state.remover)
    const filt = useSelector (state => state.filtered)
    const dispatch = useDispatch()

    




    function addtask(e) {

       e.target.previousSibling.value !==''&& dispatch(addnote(e.target.previousSibling.value))
       e.target.previousSibling.value = ''
    }
    function addtask2(e) {
        if (e.key === 'Enter' && e.target.value !== "") {
        dispatch(addnote(e.target.value))
        e.target.value = ''
    }
    }
    

    function filterTask (e) {
        
        switch (e.target.value) {
            
            case "Done" :   dispatch(filterminus()); break;
            case 'All':  dispatch(filterreset()); break;
            default: 
        }
        
    }


    return (
        <div className="List">
           
           <h1>To-Do-List</h1>
          <input type="text" placeholder="Add a task to do" onKeyPress={addtask2}/>
          <button className="addbtn" onClick={addtask}  >+</button>
          <select className="filter" name='filter' onChange={filterTask}>
              <option value="All">All</option>
              <option value="Done">Done</option>
          </select>
            {added.map(el => el.description !=="" &&   <Task 
                                    id = {el.id}
                                    key={el.id}
                                    desc={el.description}
                                    dn = {el.isDone} />)}  
        </div>
    )
}

export default AddTask
