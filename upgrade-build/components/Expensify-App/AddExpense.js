import React from 'react'
import {connect} from 'react-redux'
import {updateExpense,deleteExpense} from "../../redux/actions/expense-actions";
import moment from "moment/moment";

import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates'

import 'react-dates/lib/css/_datepicker.css';

class ExpenseAdder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description : '',
            amount : 0,
            startDate : moment(),
            datePickerfocus : true
        }
    }



render(){
    return (
        <div>
            <input type="text" value ={this.state.description} onChange={(e)=>this.setState({description : e.target.value})}/>
            <input type="number" value = {this.state.amount} onChange={(e)=>this.setState({amount : e.target.value})}/>
            <h3>Date : {moment(this.state.startDate).format("DD MMM, YYYY")}</h3>

            <SingleDatePicker
                date={this.state.startDate}
                onDateChange= { (date) => this.setState({startDate: date })} // PropTypes.func.isRequired
                focused={this.state.focused} // PropTypes.bool
                onFocusChange={ ({ focused }) => this.setState({datePickerfocus : focused })} />
        </div>
    )
}
}

export const ExpenseAddForm = (props)=>(
    <ExpenseAdder/>
)