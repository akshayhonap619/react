import React from "react"
import ReactDOM from "react-dom"

function tick() {
    ReactDOM.render(Clock, "clock");
}
const Clock = (
    <div>
        <h4>The time is </h4>
        <h4>{new Date().toDateString()}</h4>
    </div>
)


setInterval(tick,1000);