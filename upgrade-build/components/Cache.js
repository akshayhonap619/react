/**
 * Created by Akshay on 3/29/2018.
 */
import React from 'react'
import axios from 'axios'

export class Cache extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cache : []
        }
    }

    componentDidMount(){
        const url =''
        axios.get(url)
              .then((response)=>{
                setState({
                    cache : response.data
                })
              })
    }



}