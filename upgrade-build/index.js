import React from "react"
import {SkiDay} from "./components/SkiDayCount"
import ReactDOM from "react-dom"

window.React = React;

ReactDOM.render(
    <div>

     <SkiDay/>

      <h1 className="he" style={{color:"green", backgroundColor:"yellow", width:"50%"}}>
          SkiDay
      </h1>

    </div>   ,
    document.getElementById("test")
)