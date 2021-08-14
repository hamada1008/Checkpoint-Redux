import tasklist from "../../Component/ListTask";

const listMan = (state = [] , action) => {
    switch (action.type) {
case "ADDNOTE" :return [...state , action.payload];

default : return state;
}
};
export default listMan