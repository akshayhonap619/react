import React from "react"
import {SkiDayCount} from "./components/SkiDayCount"
import {SkiDay} from "./components/SkiDay"
import {SkiDayList} from "./components/SkiDayList";
import {State} from "./components/State"
import {Counter} from "./components/Counter";

import text from "./data/days"
import ReactDOM from "react-dom"

window.React = React;

ReactDOM.render(
    <div>
        <SkiDayList days= {text.days} />


      <h1 className="he" style={{color:"green", backgroundColor:"yellow", width:"50%"}}>
          SkiDay
      </h1>

        <SkiDayCount total ={50}
                powder={20}
                country={30}
                goal={100}/>


        <State />

        <Counter/>

    </div>   ,
    document.getElementById("test")
)

ReactDOM.render(
    <Counter/>,
    document.getElementById("counter")
)