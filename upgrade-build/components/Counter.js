import React from "react"

import axios from "axios"

export class Counter extends React.Component {
constructor(props){
    super(props);
    this.state = {counter : 0};
}

componentDidMount(){
    const url = "/c";

    axios.get(url).then((response)=>{
        this.setState(
            {
                counter : response.data
            }
        )
        console.log(response.data);
    })
}

render(){
    console.log(this.state.counter);
    return (
        <div>
       <Button value="increment" />
        <Button value="decrement" />
            <p>{this.state.counter[0].cache_run_id}</p>
        </div>
    )
}

}


const Button = (props)=>(
    <button>
        {props.value}
    </button>
)

function inc(num){
    return num++;
}