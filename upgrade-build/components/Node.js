/**
 * Created by Akshay on 4/15/2018.
 */
import React from 'react'
import axios from 'axios'

import {TableHead} from "./Main";


export const Node =(props)=>(
    <div>
        { (props.data.length!=0)?
            <TableHead head1="Name" head2="Node id"/> :
            <h6>No Node data</h6>
        }

        {
            props.data.map((item, i) => (
                <NodeRow item={item} key={i}/>

            ))
        }

    </div>
)


const NodeRow=(props)=>(
    <li className="list-group-item">
        <div className="container-fluid">
            <div className="row">

                <div className="col-3">
                    <a href="#"> {props.item.name} </a>
                </div>

                <div className="col-3">
                    { props.item.node_id}
                </div>

            </div>
        </div>
    </li>
)