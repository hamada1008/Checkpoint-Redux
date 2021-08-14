import * as actions from './actiontype'
export const addnote = (dc) => {
    return {
        type: actions.ADDNOTE,
        payload : {
            id : Math.random(),
            description : dc,
            isDone : false
        }
    }
}

export const toggle = (num) => {
    return {
        type: actions.TOGGLE,
        payload : {
            id : num
        }
    }
}

export const toggle2 = () => {
    return {
        type: actions.TOGGLE2,
    }
}



export const removenote = (num) => {
    
        
    return {
        type: actions.REMOVENOTE,
        payload : {
            ids : num
        }

    }
}

// export const filterr = () => {

// return {
//     type : actions.FILTER,

// }


export const filterminus = () => {

    return {
        type : actions.FILTERMINUS,
    
    }
    
    }
export const filterreset = () => {

        return {
            type : actions.FILTERRESET,
        
        }
        
        }
    