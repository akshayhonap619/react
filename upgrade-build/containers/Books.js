import React from 'react'
import {connect} from 'react-redux'

const Books=(props)=>(
    <ul className="list-group">
        props.map((item,i)=>{
            <Book item={item} key={i}/>
    })
    </ul>
)

const Boo k=(props)=>(
    <li className="list-group-item">
        {props.item.title}
    </li>
)

function mapStatetoProps(state) {
    return {
        books : state.books
    }
}


export default connect(mapStatetoProps)(Books)