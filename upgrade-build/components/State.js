import React from "react"
import text from "../data/days"
import {SkiDayList} from "./SkiDayList";
import {SkiDayRow} from "./SkiDayRow";

export class State extends React.Component {
    constructor(props){
        super(props);
        this.state = text.days;
    }

    render(){
        return (
            <div>
                <SkiDayList days={this.state}/>
            </div>
        )
    }

}
