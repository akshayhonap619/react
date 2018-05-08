import {combineReducers, createStore} from "redux";
import {filterReducer} from "../reducers/filters-reducer";
import {expenseReducer} from "../reducers/expense-reducer";

export const store = createStore(
    combineReducers({
        expenses : expenseReducer,
        filters : filterReducer
    })
)