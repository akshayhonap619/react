import React from 'react'

import Books from '../containers/Books'

export class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Books/>
            </div>
        )
    }
}