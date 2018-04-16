/**
 * Created by Akshay on 4/15/2018.
 */
import React from 'react'
import axios from 'axios'

export class Node extends React.Component
{
    constructor(props){
        super(props);
        console.log("props "+props.name)
        this.state = {
            name : props.name
        }
    }

    componentDidMount(){
        const url = "api/Nodes?id="+this.state.name;

        axios.get(url).then((response)=>{
            this.setState({
                node : response.data
            })
            console.log(response.data)
        })
    }

    render(){
        return(
            <div>
                {this.state.name}
            </div>
        )
    }
}