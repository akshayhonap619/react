import React from 'react'
import {connect} from 'react-redux'
import {AddExpense,updateExpense,deleteExpense} from "../../redux/actions/expense-actions";
import moment from "moment/moment";

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';


class ExpenseAdder extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id : (this.props.expense ) ? this.props.expense.id : undefined,
            description : (this.props.expense ) ? this.props.expense.description :'',
            amount : (this.props.expense) ? this.props.expense.amount : 0,
            startDate : (this.props.expense) ? this.props.expense.startDate :moment(),
        }
        this.submitForm = this.submitForm.bind(this)
    }

submitForm(e){
    e.preventDefault()
        if(this.state.amount && this.state.description && this.state.startDate){
            this.props.onSubmit({
                id : this.state.id,
                 description : this.state.description,
                amount : this.state.amount,
                startDate : this.state.startDate
            })
            this.setState({
                description : '',
                amount : 0,
                startDate : moment()
            })
        }
        else{
            console.log("Error")
        }
    }

render(){
    return (
        <form onSubmit={this.submitForm}>
            <input type="text" value ={this.state.description} onChange={(e)=>this.setState({description : e.target.value})}/>
            <input type="number" value = {this.state.amount} onChange={(e)=>this.setState({amount :  parseFloat(e.target.value)})}/>
            <h3>Date : {moment(this.state.startDate).format("DD MMM, YYYY")}</h3>

            <DatePicker selected={this.state.startDate}
                        onChange={(date)=> this.setState({startDate : date})} />
                <input type="submit" value="Submit"/>
        </form>
    )
}
}


 const AddExpenseFormComponent = (props)=>(
    <ExpenseAdder
        expense={props.expense}
        onSubmit={props.onSubmit}/>
)



export const AddExpenseForm = connect()(AddExpenseFormComponent)