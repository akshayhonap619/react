import React from "react"
import {SkiDayCount} from "./components/SkiDayCount"
import {SkiDay} from "./components/SkiDay"
import {SkiDayList} from "./components/SkiDayList";

import ReactDOM from "react-dom"

window.React = React;

ReactDOM.render(
    <div>
        <SkiDayList days={
            [
                {
                    resort : "Sqaw Valley",
                    date: new Date("1/2/2017"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort : "KirkWood",
                    date: new Date("3/28/2017"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort : "Mt. Tallac",
                    date: new Date("1/2/2017"),
                    powder: false,
                    backcountry: true
                }
            ]
        } />


      <h1 className="he" style={{color:"green", backgroundColor:"yellow", width:"50%"}}>
          SkiDay
      </h1>

        <SkiDayCount total ={50}
                powder={20}
                country={30}
                goal={100}/>

    </div>   ,
    document.getElementById("test")
)