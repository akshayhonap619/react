import React from 'react'
import {connect} from 'react-redux'
import {AddExpenseForm} from "./AddExpense";

import Filters from './Filters'
import {filterData} from "../../redux/selectors/expense-selector";
import {deleteExpense,AddExpense,updateExpense} from "../../redux/actions/expense-actions";


/*
class ExpenseList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expenses : this.props.expenses
        }
    }

    render(){
        return(
            <div>
                <h1> This is Expensify List</h1>
                <Filters name="Text Filter"/>
                <hr/>
                {this.state.expenses.map((expense,i)=>(
                    <Exp2 expense={expense} key={i} />
                ))}
                <br/><hr/>
                <AddExpenseForm />
            </div>
        )
    }
}
*/

 const ExpenseList=(props)=>(
     <div>
         <h1> Filters </h1>
         <Filters name="Text Filter"/>
         <hr/>
         <h1> Expense-List</h1>
         {props.expenses.map((expense,i)=>(
             <Exp2 expense={expense} key={i} />
         ))}
         <br/><hr/>
         <h1>Add Expense</h1>
         <AddExpenseForm
             onSubmit={(expense)=>props.dispatch(AddExpense(expense))}
         />
     </div>
 )

const mapStatetoProps=(state)=>({
    expenses : filterData(state.expenses, state.filters)
})

export default connect (mapStatetoProps)(ExpenseList)



//
// const ExpenseListItem = (props)=>(
//     <div>
//
//         <h3>Name :{props.expense.description}</h3>
//         <h3>Amount : {props.expense.amount}</h3>
//
//         <button onClick={(e)=>props.dispatch(deleteExpense(props.expense.id))}>Delete</button>
//     </div>
//
// )
//
class ExpenseListItem extends React.Component{
     constructor(props){
         super(props)
         this.state = {
             update : false
         }
     }

     render(){
         return(
             <div>

                 <h3>Name :{this.props.expense.description}</h3>
                 <h3>Amount : {this.props.expense.amount}</h3>
                 <h3>Date : {this.props.expense.startDate.format("DD MMM, YYYY")}</h3>
                 <button onClick={(e)=>this.props.dispatch(deleteExpense(this.props.expense.id))}>Delete</button>
                 <button onClick={(e)=>this.setState({update : true})}>Update</button>
                 {(!this.state.update)? null :
                     <div>

                     <AddExpenseForm expense={this.props.expense}
                                     onSubmit={(expense)=>{
                                                console.log(expense)
                                                this.props.dispatch(updateExpense(expense,expense.id))
                                                this.setState({update : false})}}
                     />
                     </div>
                 }
             </div>

         )
     }

}


const Exp2 =connect()(ExpenseListItem)


