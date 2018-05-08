const filters = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}



export const filterReducer = (state = filters,action)=>{
    switch(action.type){

        case 'SETTEXTFILTER':
            return{
                ...state,
                text : action.text
            }

        case 'SETSORTBY':
            return{
                ...state,
                sortBy :action.sortBy
            }

        case 'SETDATEFILTER':
            return{
                ...state,
                startDate : action.startDate
            }

        default:
            return state;
    }
}
