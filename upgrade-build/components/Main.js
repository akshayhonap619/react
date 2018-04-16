import React from "react"


export class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            heirarchy : {},
            node : {},
            security : {}
        }
    }



    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">Hierarchy</div>
                    <div className="col-4">Nodes </div>
                    <div className="col-4">Security </div>
                </div>
            </div>
        )
    }
}