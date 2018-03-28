import React from "react"

import axios from "axios"

export class Counter extends React.Component {
constructor(props){
    super(props);
    this.state = {
        counter : []
        //counter : [{"cache_run_id":1118,"status":"Active","hierarchy_id":3,"name":"GICS Sectors","start_date":"1980-01-01T00:00:00","end_date":"2018-02-22T00:00:00","periodicity":2},{"cache_run_id":1128,"status":"Active","hierarchy_id":3,"name":"GICS Sectors","start_date":"1980-01-01T00:00:00","end_date":"2018-02-23T00:00:00","periodicity":1},{"cache_run_id":1129,"status":"Active","hierarchy_id":7,"name":"GICS Groups","start_date":"1980-01-01T00:00:00","end_date":"2018-02-23T00:00:00","periodicity":1},{"cache_run_id":1132,"status":"Active","hierarchy_id":7,"name":"GICS Groups","start_date":"1980-01-01T00:00:00","end_date":"2018-02-27T00:00:00","periodicity":2},{"cache_run_id":1105,"status":"NoChange","hierarchy_id":12,"name":"Resources","start_date":"2018-01-20T00:00:00","end_date":"2018-02-20T00:00:00","periodicity":2},{"cache_run_id":1120,"status":"Active","hierarchy_id":100,"name":"Climate Change","start_date":"1980-01-01T00:00:00","end_date":"2018-02-22T00:00:00","periodicity":2},{"cache_run_id":1139,"status":"NoChange","hierarchy_id":109,"name":"Real Assets","start_date":"1980-01-01T00:00:00","end_date":"2018-03-03T00:00:00","periodicity":1},{"cache_run_id":1158,"status":"Active","hierarchy_id":109,"name":"Real Assets","start_date":"1980-01-01T00:00:00","end_date":"2018-03-27T00:00:00","periodicity":1},{"cache_run_id":1125,"status":"Active","hierarchy_id":109,"name":"Real Assets","start_date":"1980-01-01T00:00:00","end_date":"2018-02-21T00:00:00","periodicity":2},{"cache_run_id":1121,"status":"Active","hierarchy_id":110,"name":"Resource - Real Assets","start_date":"1980-01-01T00:00:00","end_date":"2018-02-22T00:00:00","periodicity":2},{"cache_run_id":1123,"status":"NoChange","hierarchy_id":110,"name":"Resource - Real Assets","start_date":"2017-01-01T00:00:00","end_date":"2018-01-01T00:00:00","periodicity":2},{"cache_run_id":1112,"status":"Active","hierarchy_id":1278,"name":"Sajeev-Test","start_date":"1980-01-01T00:00:00","end_date":"2018-02-21T00:00:00","periodicity":2},{"cache_run_id":1113,"status":"NoChange","hierarchy_id":1278,"name":"Sajeev-Test","start_date":"1980-01-01T00:00:00","end_date":"2018-02-21T00:00:00","periodicity":2},{"cache_run_id":1115,"status":"NoChange","hierarchy_id":1278,"name":"Sajeev-Test","start_date":"1980-01-01T00:00:00","end_date":"2018-02-21T00:00:00","periodicity":2},{"cache_run_id":1101,"status":"Active","hierarchy_id":1278,"name":"Sajeev-Test","start_date":"2017-02-19T00:00:00","end_date":"2018-02-17T00:00:00","periodicity":1}]
    };
}

componentDidMount(){
    const url = "/api/Cache/G";

    axios.get(url).then((response)=>{
        this.setState(
            {
                counter : response.data
            }
        )
        //console.log(response.data);
    })
}

render(){
    console.log(this.state.counter);
    return (
        <div>
            {
                this.state.counter.map((single,i)=>
                    (
                        <News obj={single}
                                key={i}
                        />
                    )
                )
            }
        </div>
    )
}
}


const News = (props)=>(
    <div>
        <p>
            {props.obj.cache_run_id}
        </p>
        <p>
            {props.obj.status}
        </p>
    </div>
)