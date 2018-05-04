import {createStore,combineReducers} from 'redux'

import uuid from 'uuid'

const state = {
    expenses : [{
        id : '1',
        description : 'Demo Expense',
        createdAt : ''
    }]
}

const filters = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

const expenseReducer =(state =[],action)=>{
    switch (action.type){
        case 'ADDEXPENSE':
            return [...state,action.expense];


        default:
            return state;
    }
}

const filterReducer = (state = filters,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
            expenses : expenseReducer,
            filters : filterReducer
        })
)

console.log(store.getState());

store.subscribe(()=>console.log(store.getState()))


//Action Generators
//Add Expense

const AddExpense= ({description = null,amount = 0,createdAt = Date.now()} = {})=>({
    type : "ADDEXPENSE",
    expense : {
        id : uuid(),
        description,
        amount,
        createdAt
    }
})

store.dispatch(AddExpense({
    description : "Rent"
}))