import React from "react"

export class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.reset = this.reset.bind(this)
    }

    increase(){
        this.setState(
            {
                counter : this.state.counter + 1

            }
        )
    }

    reset(){
        this.setState({
            counter : 0
        })
    }

    decrease(){
        this.setState({
            counter : (this.state.counter == 0)? 0 : this.state.counter-1
        })
    }

    render(){
        return (
            <div>
                <h2> {this.state.counter} </h2>
                <button onClick={this.increase} className="btn btn-success"> + </button>
                <button onClick={this.decrease} className="btn btn-danger"> - </button>
                <button onClick={this.reset} className="btn btn-warning"> 0 </button>
            </div>
        )

    }


}

