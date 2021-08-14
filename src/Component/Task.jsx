import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {toggle2 , removenote,addnote , toggle} from '../Redux/actions'
import tasklist from './ListTask'


const Task = (props) => {


    const edit = useSelector (state => state.togglerEdit)
    // const remove = useSelector (state => state.remover)
    // const added = useSelector( state => state.adder)
    // const done = useSelector(state => state.togglerDone)
    const items = useSelector(state => state.bigReducer)


    const dispatch = useDispatch()

    

    function unlist (e) {
        e.preventDefault()
        dispatch(toggle(props.id))
        dispatch(addnote(''))
    }

 
    

       
    
    function editTask (e) {

        
        e.target.previousSibling.contentEditable = !edit
        dispatch(toggle2())
        e.target.previousSibling.focus() 
        
    }
   


    function unedittask (e) {
        if (e.key === 'Enter') { 
            e.preventDefault()
            e.target.contentEditable = false 
            dispatch(toggle2())
    }}

    function removeTask () {
       
        dispatch(removenote(props.id))
        // dispatch(addnote(''))

    }

    

    return props.desc !=='' ? <div className="task" >
        
        <span className={props.dn ? "taskdetail lined": "taskdetail"} contentEditable={false} onClick={unlist} onKeyPress={unedittask}>{props.desc}</span> 
        <button onClick={editTask} className="editTask">Edit</button>
        <button onClick={removeTask} className="removeTask">-</button>
        </div> : <div></div>
    
}

export default Task
