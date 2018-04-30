import {createStore} from 'redux'

const store = createStore((state = {count : 0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count : state.count + 1
            }
        default:
            return state;
    }



    return state;
})

console.log(store.getState())

store.dispatch(
    {
        type : 'INCREMENT'
    })


store.subscribe(()=>console.log(store.getState()))


//Action Creaters
const incrementCount = ({incrementBy})=>{
  return{
        type : "INCREMENT",
        count : incrementBy
}
}