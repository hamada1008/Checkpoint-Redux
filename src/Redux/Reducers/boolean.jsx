import tasklist from "../../Component/ListTask";


const ToggleReducer = (state = [] , action) => {
        switch (action.type) {
    case "TOGGLE" : 
    for (let i of state) 
    { if (i.id === action.payload.id) { i.isDone = !i.isDone } }return state;
    default : return state;
}
};
export default ToggleReducer