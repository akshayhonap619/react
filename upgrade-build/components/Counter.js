import React from "react"

export class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        this.increase = this.increase.bind(this)
    }

    increase(){
        this.setState(
            {
                counter : this.state.counter + 1

            }

        )
    }

    render(){
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increase} className="btn btn-success"> + </button>
                <button className="btn btn-danger"> - </button>
                <button className="btn btn-warning"> 0 </button>
            </div>
        )

    }


}

