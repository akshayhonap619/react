import React from 'react'
import {connect} from 'react-redux'
import {updateExpense,deleteExpense} from "../../redux/actions/expense-actions";

class AddExpenseto1 extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            description : "Hello",
            expense : props.expense,
            editable : false
        }
        this.dispatch = props.dispatch.bind(this)
    }

    render(){
         return (
            <div>
               Name : <input type="text" value={this.state.expense.description}   onChange={(e)=>{if(this.state.editable){this.setState({expense :{...this.state.expense, description :e.target.value }})}}}/>
               Amount : <input type="text" value={this.state.expense.amount}   onChange={(e)=>{if(this.state.editable){this.setState({expense :{...this.state.expense, amount :e.target.value }})}}} />
               <button onClick={(e)=>{this.dispatch(this.state.expense.id)}}>Delete</button>
               <button onClick={(e)=>{
                   this.setState({editable : !this.state.editable})
               }}>{(this.state.editable)? "Save" : "Edit"}</button>
            </div>
        )
    }

}

const mapStatetoProps = (state)=>({
    expenses : state.expenses
})

export const Expense1 = connect()(AddExpenseto1)