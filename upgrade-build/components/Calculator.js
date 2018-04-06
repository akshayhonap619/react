
import React from 'react'


export class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           temperature : 10,
            scale : 'c'
        }
        this.changeEvent = this.changeEvent.bind(this)

    }

    changeEvent(event, field){
        this.setState({
            temperature : event.target.value,
            scale : field
        })
    }

    setCelciusValue(){
       return (this.state.scale == 'f')? (this.state.temperature - 32)*5/9  : this.state.temperature
    }

    setFarValue(){
       return (this.state.scale == 'c')? (this.state.temperature *5/9) + 32  : this.state.temperature
    }

    render(){
        return(
            <form>
                <Temperature scale="c" value={this.setCelciusValue() } change={this.changeEvent} />
                <Temperature scale="f" value = {this.setFarValue()} change={this.changeEvent} />
            </form>
        )
    }

}



const Temperature = (props)=>(
    <div>
        {console.log("value is "+props.value)}
    <p>Enter temperature in {props.scale}</p>
    <input type="text" value={props.value} placeholder={props.scale + " value"} onChange={(e)=>props.change(e,props.scale)} />
    </div>
)


