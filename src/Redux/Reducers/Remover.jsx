import tasklist from "../../Component/ListTask";

const remover = (state = [] , action) => {

    switch (action.type) {
case "REMOVENOTE" :return state.filter( el => el.id == action.payload.ids)
default : return state;
}}
export default remover