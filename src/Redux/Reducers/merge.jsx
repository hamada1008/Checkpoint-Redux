import { combineReducers } from "redux";
import bigReducer from "./BigReducer";
import ToggleReducer2 from './boolean2'
const allReducers = combineReducers({
    togglerEdit : ToggleReducer2,
    bigReducer
})

export default allReducers