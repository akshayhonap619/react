import ExpenseList from '../components/Expensify-App/Expenses'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from '../redux/store/configureStore'

import {AddExpense,updateExpense,deleteExpense} from "./actions/expense-actions";
import {setTextFilter} from "./actions/filter-actions";

console.log(store.getState())

setTimeout(()=>  store.dispatch(AddExpense({description:'Rent', amount : 500}) ) , 3000)

store.dispatch(setTextFilter("Rent"))

ReactDOM.render(
    <Provider store={store}>
        <ExpenseList />
    </Provider>,

    document.getElementById("react-app")
)