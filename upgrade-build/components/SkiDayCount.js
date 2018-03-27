/**
 * Created by Akshay on 3/25/2018.
 */

import Snow from  "react-icons/lib/ti/weather-snow"

function decimalToPerc(num){
    return num*100;
}

function calculate(total,goal){
    return total/goal;
}

export const SkiDayCount =(props, { total}) => (
    <div>
        <div className="total-days">
            <span>{total}</span>
        </div>

        <div className="powder-days">
            <span>{props.powder} days</span>
            <Snow/>
        </div>

        <div className="backcountry-days">
            <span>{props.country}</span>
        </div>

        <div>
            <span>{decimalToPerc(calculate(props.total, props.goal))} %  Progress</span>
        </div>

    </div>
)

