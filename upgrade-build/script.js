import React from "react"
import ReactDOM from "react-dom"
import {Counter} from "./components/Counter"
import {Calculator} from "./components/Calculator";
import {Member} from "./components/Member";

import "bootstrap/dist/css/bootstrap.min.css"
import {Main} from "./components/Main";

function tick() {
    const Clock = (
        <div>
            <h4>The time is </h4>
            <h4>{new Date().toLocaleTimeString()}</h4>
        </div>
    )


    ReactDOM.render(Clock, document.getElementById("clock"));
}


setInterval(tick,1000);


ReactDOM.render(
    <Counter/>,
    document.getElementById("counter")
);



ReactDOM.render(
    <Calculator/>,
    document.getElementById("calc")
)

ReactDOM.render(
    <Member/>,
    document.getElementById("member")
)


