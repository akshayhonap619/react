import {store} from "./store/configureStore";

import {AddExpense,updateExpense,deleteExpense} from './actions/expense-actions'
import {setDateFilter,setSortBy,setTextFilter} from "./actions/filter-actions";


const state = {
    expenses : [{
        id : '1',
        description : 'Demo Expense',
        createdAt : ''
    }]
}




console.log(store.getState());

store.subscribe(()=>{
    const state = store.getState()
    const filteredOutput = filterData(state.expenses, state.filters);
    console.log({
        expenses :filteredOutput
    })
})


//Action Generators


//------------------------------

const filterData = (expenses , filters)=>{

   return expenses.filter((expense)=>{
       //return (!typeof filters.startDate != "undefined" && !expense.date >= filters.startDate) ||
       //(!expense.description.toLowerCase().includes(filters.text.toLowerCase()))
       //return !expense.description.toLowerCase().includes(filters.text.toLowerCase())
       return (expense.description.toLowerCase().includes(filters.text.toLowerCase()) || expense.description.length<=0) &&
           (expense.startDate>= filters.startDate || typeof filters.startDate == 'undefined')
    }).sort((a,b)=>{
        if(filters.sortBy =='amount')
            return a.amount - b.amount
       else
           return a.startDate - b.startDate
   })

}

//------------------------------
//Actions
const exp = store.dispatch(AddExpense({
    description : "Rent"
}))

const exp1 = store.dispatch(AddExpense())

store.dispatch(deleteExpense(exp1.expense.id))

const exp2 = store.dispatch(AddExpense())

store.dispatch(updateExpense(exp2.expense.id,{description : "Milk"}))

store.dispatch(updateExpense(exp.expense.id,{amount : 500}))

store.dispatch(setTextFilter("Rent"))

store.dispatch(setTextFilter())

store.dispatch(setSortBy('amount'))


