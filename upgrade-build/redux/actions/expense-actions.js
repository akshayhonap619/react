import uuid from "uuid";

//Add Expense

export const AddExpense= ({description = "",amount = 0,startDate = Date.now()} = {})=>({
    type : "ADDEXPENSE",
    expense : {
        id : uuid(),
        description,
        amount,
        startDate
    }
})


//Delete Expense
export const deleteExpense = (id)=>({
    type : "DELETEEXPENSE",
    id
})

//Update Expense
export const updateExpense = (expense,id)=>({
    type : "UPDATEEXPENSE",
    id,
    expense : expense
})