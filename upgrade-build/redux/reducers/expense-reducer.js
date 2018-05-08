export const expenseReducer =(state =[],action)=>{
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