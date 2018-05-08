import uuid from "uuid";

//Add Expense

export const AddExpense= ({description = "",amount = 0,createdAt = Date.now()} = {})=>({
    type : "ADDEXPENSE",
    expense : {
        id : uuid(),
        description,
        amount,
        createdAt
    }
})


//Delete Expense
export const deleteExpense = (id)=>({
    type : "DELETEEXPENSE",
    id
})

//Update Expense
export const updateExpense = (id,expense)=>({
    type : "UPDATEEXPENSE",
    id,
    expense : expense
})