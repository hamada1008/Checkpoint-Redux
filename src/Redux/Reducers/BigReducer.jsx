

const bigReducer = (state = [] , action) => {
        switch (action.type) {
    case "TOGGLE" : 
    for (let i of state) 
    { if (i.id === action.payload.id) { i.isDone = !i.isDone } }return state;
    case "ADDNOTE" :return [...state , action.payload];
    case "REMOVENOTE" :return state.filter( el => el.id !== action.payload.ids);
    default : return state;
      
}
};
export default bigReducer