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

        case 'DELETEEXPENSE':
            return state.filter((expense)=> expense.id!= action.id)

        case 'UPDATEEXPENSE':
            return state.map((expense)=>{
                if(expense.id == action.id)
                    return {
                        ...expense,
                        ...action.expense
                    }
                else
                    return expense
            })

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


//Delete Expense
const deleteExpense = (id)=>({
    type : "DELETEEXPENSE",
    id
})

//Update Expense
const updateExpense = (id,expense)=>({
    type : "UPDATEEXPENSE",
    id,
    expense : expense
})


//Actions
const exp = store.dispatch(AddExpense({
    description : "Rent"
}))

const exp1 = store.dispatch(AddExpense())

store.dispatch(deleteExpense(exp1.expense.id))

const exp2 = store.dispatch(AddExpense())

store.dispatch(updateExpense(exp2.expense.id,{description : "Milk"}))

store.dispatch(updateExpense(exp.expense.id,{amount : 500}))