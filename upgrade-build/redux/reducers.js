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
            return state.filter((expense)=>expense.id!==action.id )

        case 'UPDATEEXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id)
                    return{...expense,
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

        case 'SETTEXT':
            return{
                ...state,
                text : action.filter.text
            }

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

const DeleteExpense =(id)=> ({
    type : 'DELETEEXPENSE',
    id : id
})


const UpdateExpense = (id,{amount,description}={})=>({
    type : "UPDATEEXPENSE",
    id,
    expense : {
        amount,
        description
    }

})

const setTextFilter=(text = "")=>({
    type: 'SETTEXT',
    filter :{
        text
    }
})
//-----------------------------------------------

const expense1 = store.dispatch(AddExpense({
    description : "Rent"
}))

var expense2 = store.dispatch(AddExpense())

store.dispatch(DeleteExpense(expense2.expense.id))

expense2 = store.dispatch(AddExpense())
console.log(store.dispatch(UpdateExpense(expense2.expense.id ,{amount: 100, description : "Milk"})))

store.dispatch(AddExpense({description:"Utilities", amount: 200}))

store.dispatch(setTextFilter('Rent'))
store.dispatch(setTextFilter())