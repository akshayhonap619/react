/**
 * Created by Akshay on 3/25/2018.
 */
 import React from 'react'

export class SkiDay extends React.Component{
    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>5 days</span>
                </div>
                <div className="powder-days">
                    <span>2 days</span>
                </div>
                <div className="backcountry-days">
                    <span>1 hiking day</span>
                </div>
            </div>
        )
    }
}