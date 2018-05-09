export const filterData = (expenses , filters)=>{

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