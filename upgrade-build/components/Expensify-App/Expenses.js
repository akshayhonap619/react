import React from 'react'
import {connect} from 'react-redux'
import {ExpenseAddForm} from "./AddExpense";

import Filters from './Filters'
import {filterData} from "../../redux/selectors/expense-selector";
import {deleteExpense,AddExpense,updateExpense} from "../../redux/actions/expense-actions";



const ExpenseList=(props)=>(
    <div>
        <h1> This is Expensify List</h1>
        <Filters name="Text Filter"/>
        <hr/>
        {props.expenses.map((expense,i)=>(
            <Exp2 expense={expense} key={i} />
        ))}
        <br/><hr/>
        <ExpenseAddForm/>
    </div>
)

const mapStatetoProps=(state)=>({
    expenses : filterData(state.expenses, state.filters)
})

export default connect (mapStatetoProps)(ExpenseList)


const ExpenseListItem = (props)=>(
    <div>

        <h3>Name :{props.expense.description}</h3>
        <h3>Amount : {props.expense.amount}</h3>

        <button onClick={(e)=>props.dispatch(deleteExpense(props.expense.id))}>Delete</button>
    </div>

)

const Exp2 =connect()(ExpenseListItem)

//Clock
