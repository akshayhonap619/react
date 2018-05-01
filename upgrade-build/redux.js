import {createStore} from 'redux'

const store = createStore((state={count : 0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count : state.count + action.incrementBy
            }

        case 'DECREMENT':
            return{
                count : state.count - action.decreaseBy
            }

        case 'SET':
            return{
                count : action.value
            }
        case 'RESET':
            return{
                count: 0
            }

        default:
            return state;
    }
})

console.log(store.getState())

//Action Generators
const incrementCount = (incrementBy= 1)=> ({

                type: "INCREMENT",
                incrementBy: incrementBy
})

const decrementCount = ({decementBy = 1} = {})=>({
    type: "DECREMENT",
    decreaseBy : decementBy
})


const setCount = ({value = 0} = {})=>({
    type: "SET",
    value : value
})

const resetCount = ()=>({
    type:"RESET"
})

//Actions
store.subscribe(()=>console.log(store.getState()))

store.dispatch(incrementCount(3))
store.dispatch(incrementCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({decementBy : 13}))

store.dispatch(setCount())
store.dispatch(setCount({value : 10}))

store.dispatch(resetCount())


//Action Creaters
