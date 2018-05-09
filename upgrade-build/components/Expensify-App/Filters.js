import React from 'react'
import ReactDOM from 'react-dom'

import {connect} from 'react-redux'

import {setTextFilter} from '../../redux/actions/filter-actions'
import  {setSortBy} from "../../redux/actions/filter-actions";
// class Filters extends React.Component{
//     constructor(props){
//         super(props)
//
//     }
//
//     changeText(event){
//         this.setState({
//             text : event.target.value
//         })
//     }
//
//     render(){
//         return(
//             <div>
//                 <input type="text" value={props.filters.text} onChange={this.changeText}/>
//             </div>
//
//         )
//     }
// }


const Filters = (props)=>(
    <div>
        <h3>{props.name} :  </h3><input type="text" value={props.filters.text}  onChange={(e)=>props.dispatch(setTextFilter(e.target.value))} />
        <h3> SortBy </h3>
        <select onChange={(e)=>props.dispatch(setSortBy())}>
            <option value="amount">Amount</option>
            <option value="startDate">Start Date</option>
        </select>
    </div>
)

const mapStateToProps = (state)=>({
    filters : state.filters
})

export default connect(mapStateToProps)(Filters)