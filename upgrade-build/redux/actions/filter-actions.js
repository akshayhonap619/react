
//SetTextFilter
export const setTextFilter = (text = '')=>({
    type : "SETTEXTFILTER",
    text
})

//Set Sort by
export const setSortBy = (sortBy = 'date')=>({
    type : "SETSORTBY",
    sortBy
})

//SetStartDateFilter
export const setDateFilter = (startDate= undefined)=>({
    type : "SETDATEFILTER",
    startDate
})
