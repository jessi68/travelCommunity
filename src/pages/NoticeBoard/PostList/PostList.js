import { Component } from "react";
import { Link } from "react-router-dom";
import  "./PostList.scss"



export default class PostList extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        console.log(this.props.posts);
        return(
            <div className="vertical-align">

                {this.props.posts.map((post) => 
                <div className="brief-info" key={post["id"] +"briefExplanation"}>
                  <div className="post-id">{post["id"].toString()}</div>
                   <div className="post-title">{post["title"]}</div>
                   <div className="post-writer-id">{post["nickname"]}</div>
                   <div className="post-data">{post["writtenDate"]}</div>
                </div>)}
            </div>
        )
    }
}