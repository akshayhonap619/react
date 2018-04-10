import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"


export class Member extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name : "Edna Welesh",
            thumbnail : "https://picsum.photos/200/300/?image=623",
            admin: false,
            email : "abc@xyz.com"
        }
        this.makeAdmin = this.makeAdmin.bind(this)
        this.getData = this.getData.bind(this)
    }

    makeAdmin(){
        this.setState({
            admin : !this.state.admin
        })
        console.log(this.state.admin)
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.thumbnail} /> <br/>
                <button onClick={this.makeAdmin} className={(this.state.admin)? "btn btn-danger": "btn btn-success"}
                >
                    {(this.state.admin) ? "Remove Admin" : "Make Admin"}
                </button>

                <button onClick={this.getData}>Get Data</button>

            </div>
        )
    }

    getData(){
        axios.get("https://jsonplaceholder.typicode.com/posts/")
            .then((response)=>{this.setState({
                response : response.data
            })
                console.log(response)
                console.log("resp")
                ReactDOM.render(
                    <Posts posts={this.state.response} />,
                    document.getElementById("response")
                )}
            )
    }

}

//Posts as a stateless component
const Posts=(props)=>(
    <div>
        {console.log(props)}
        {props.posts.map((post,i)=>
            <Post post={post} key={i}/>
        )}
    </div>
)


const Post=(props)=>(
    <div>
        <h6>userid : {props.post.userId} </h6>
        <h6>id : {props.post.id} </h6>
        <h6>title : {props.post.title} </h6>
        <h6>body : {props.post.body} </h6>
    </div>
)