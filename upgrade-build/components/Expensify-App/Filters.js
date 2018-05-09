import React from 'react'
import ReactDOM from 'react-dom'

import {connect} from 'react-redux'
import {setTextFilter} from '../../redux/actions/filter-actions'
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
    <input type="text" value={props.filters.text}  onChange={(e)=>props.dispatch(setTextFilter(e.target.value))} />
)

const mapStateToProps = (state)=>({
    filters : state.filters
})

export default connect(mapStateToProps)(Filters)