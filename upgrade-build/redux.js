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


const incrementCount = ({incrementBy})=>{
    return{
        type : "INCREMENT",
        count : incrementBy
    }
}
store.subscribe(()=>console.log(store.getState()))

store.dispatch(incrementCount({incrementBy : 5}))




//Action Creaters
