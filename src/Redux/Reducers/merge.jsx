import { combineReducers } from "redux";
import ToggleReducer from './boolean';
import ToggleReducer2 from "./boolean2";
import listMan from "./listManager";
import remover from "./Remover";
import filterReducer from "./Filter";

const allReducers = combineReducers({
    togglerDone : ToggleReducer,
    togglerEdit : ToggleReducer2,
    adder : listMan,
    remover : remover,
    filtered : filterReducer
})

export default allReducers