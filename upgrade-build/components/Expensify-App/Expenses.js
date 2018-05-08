import React from 'react'
import {connect} from 'react-redux'

import Filters from './Filters'

const ExpenseList=(props)=>(
    <div>
        <h1> This is Expensify List</h1>
        {props.expenses.map((expense,i)=>(
            <ExpenseListItem expense={expense} key={i}/>
        ))}

    </div>
)

const mapStatetoProps=(state)=>({
    expenses : state.expenses
})

export default connect (mapStatetoProps)(ExpenseList)


const ExpenseListItem = (props)=>(
    <div>
        <Filters />
        <h3>Name :{props.expense.description}</h3>
        <h6>Amount : {props.expense.amount}</h6>
    </div>

)

//Clock
