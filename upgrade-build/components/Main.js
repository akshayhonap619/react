import React from "react"
import axios from "axios";
import Check from "react-icons/lib/go/check"
import Calander from "react-icons/lib/go/calendar"
import Info from "react-icons/lib/io/informatcircled"
import Account from "react-icons/lib/md/account-circle"
import {Node} from "./Node";

var hdate = require('human-date')

export class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            hierarchy: [],
            node: [],
            security: []

        }
        this.getNodes = this.getNodes.bind(this);
    }
    componentDidMount() {
        const url = '/api/Cache/G'
        axios.get(url)
            .then((response) => {
                this.setState({
                    hierarchy: response.data
                })
            })
    }

    getNodes(event,item){
        console.log(item)
        const url = '/api/Nodes'
        axios.get(url).then((response)=>{
            this.setState({
                node : response.data
            })
            console.log(this.state.node)
        })
    }


    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Cache data={this.state.hierarchy} click={this.getNodes}/>
                    </div>
                    <div className="col-4">
                        <Node data={this.state.node}/>
                    </div>
                    <div className="col-4"> </div>
                </div>
            </div>
        )
    }
}


//---------------------------End of Main Component----------------------------------------------------------------------

const Cache =(props)=>(
    <div>
        <ul className="list-group">
            <TableHead head1="Name" head2="Periodicity" head3="Last Run" head4="Status"/>
            {
                props.data.map((item,i)=>(
                        <TableRow item={item} key={i} click={props.click}/>
                    )

                )
            }
        </ul>
    </div>
)

export const TableHead = (props)=>(
    <li className="list-group-item">
        <div className="container-fluid">
            <div className="row">

                <div className="col-3">
                    <b>{props.head1}</b>
                    <span>&nbsp;<Account/></span>
                </div>

                <div className="col-3">
                    <b>{props.head2}</b>

                </div>

                {(props.head3!=null)?
                <div className="col-3">
                    <b>{props.head3}</b>
                    <span> &nbsp;<Calander/></span>
                </div>  : null}

                {(props.head4!=null)?
                <div className="col-3">
                    <b>{props.head4}</b>
                    <span>&nbsp;<Info/> </span>
                </div> : null }


            </div>
        </div>
    </li>
)

//-------------------------------Display the data of Hierarchy----------------------------------------------------------
const TableRow = (props)=>(
    <li className="list-group-item">
        <div className="container-fluid">
            <div className="row">

                <div className="col-3">
                    <a href="#" onClick={(e)=>props.click(e,props.item.name)}> {props.item.name} </a>
                </div>

                <div className="col-3">
                    { (props.item.periodicity == '1')? "Daily" : "Monthly" }
                </div>

                <div className="col-3">
                    { hdate.relativeTime(new Date(props.item.end_date))}
                </div>


                <div className="col-3">
                    {props.item.status}
                    <span style={{color:"green"}}> {(props.item.status == "Active")? <Check/> : null } </span>
                </div>


            </div>
        </div>
    </li>
)
//---------------------------------------- End of Hierarchy Section ----------------------------------------------------