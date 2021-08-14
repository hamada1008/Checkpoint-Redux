import tasklist from "../../Component/ListTask";

const filterReducer = (state = [] , action) => {
    const INITIAL_STATE = tasklist

    switch (action.type) {
//case "FILTER" : return INITIAL_STATE.filter(el => el.isDone === false);
case "FILTERMINUS" : return state.filter(el => el.isDone === true && el.description !=="" );
case "FILTERRESET" : return INITIAL_STATE;
default : return state;
}
};
export default filterReducer