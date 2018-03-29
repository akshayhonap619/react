/**
 * Created by Akshay on 3/29/2018.
 */
import React from 'react'
import axios from 'axios'

var hdate = require('human-date')

export class Cache extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cache : []
        }
    }

    componentDidMount(){
        const url ='/api/Cache/G'
        axios.get(url)
              .then((response)=>{
                this.setState({
                    cache : response.data
                })
              })
    }

    render(){
        return (
            <div>
                <ul className="list-group">
                {
                    this.state.cache.map((item,i)=>(
                        <TableRow item={item} key={i} />
                        )

                    )
                }
                </ul>
            </div>
        )
    }



}

const TableRow = (props)=>(
    <li className="list-group-item">
    <div className="container-fluid">
        <div className="row">

            <div className="col-4">
                <a href=""> {props.item.name} </a>
            </div>

            <div className="col-3">
                { (props.item.periodicity == '1')? "Daily" : "Monthly" }
            </div>

            <div className="col-3">
                { hdate.relativeTime(new Date(props.item.end_date))}
            </div>


        <div className="col-2">
            {props.item.status}
        </div>


        </div>
    </div>
    </li>
)