import ExpenseList from '../components/Expensify-App/Expenses'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from '../redux/store/configureStore'

import {AddExpense,updateExpense,deleteExpense} from "./actions/expense-actions";
import {setTextFilter} from "./actions/filter-actions";



store.dispatch(AddExpense({description:'Rent', amount : 500}) )

//store.dispatch(setTextFilter("Rent"))

store.subscribe(()=>console.log(store.getState()))

console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <ExpenseList />
    </Provider>,

    document.getElementById("react-app")
)