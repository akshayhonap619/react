import ExpenseList from '../components/Expensify-App/Expenses'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from '../redux/store/configureStore'

import {AddExpense,updateExpense,deleteExpense} from "./actions/expense-actions";

console.log(store.getState())

setTimeout(()=>  store.dispatch(AddExpense({description:'Rent', amount : 500}) ) , 3000)

ReactDOM.render(
    <Provider store={store}>
        <ExpenseList />
    </Provider>,

    document.getElementById("react-app")
)