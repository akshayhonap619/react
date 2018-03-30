/**
 * Created by Akshay on 3/29/2018.
 */
import React from 'react'
import axios from 'axios'

import Check from "react-icons/lib/go/check"
import Calander from "react-icons/lib/go/calendar"
import Info from "react-icons/lib/io/informatcircled"
import Account from "react-icons/lib/md/account-circle"

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
                    <TableHead/>
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
            <span style={{color:"green"}}> {(props.item.status == "Active")? <Check/> : null } </span>
        </div>


        </div>
    </div>
    </li>
)

const TableHead = ()=>(
    <li className="list-group-item">
        <div className="container-fluid">
            <div className="row">

                <div className="col-4">
                   <b>Name</b>
                <span>&nbsp;<Account/></span>
                </div>

                <div className="col-3">
                   <b>Periodicity</b>

                </div>

                <div className="col-3">
                    <b>Last Run</b>
                    <span> &nbsp;<Calander/></span>
                </div>


                <div className="col-2">
                    <b> Status </b>
                    <span>&nbsp;<Info/> </span>
                </div>


            </div>
        </div>
    </li>
)