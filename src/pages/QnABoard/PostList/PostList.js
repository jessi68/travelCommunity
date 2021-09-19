import { Component } from "react";
import  "./PostList.scss"


function RowTable(props) {

    return(
        <div className="brief-info" key={props["id"] +"briefExplanation"}>
        <div className="post-id">{props["id"].toString()}</div>
         <div className="post-title">{props["title"]}</div>
         <div className="post-writer-id">{props["nickname"]}</div>
         <div className="post-data">{props["writtenDate"]}</div>
      </div>
    );
}


export default class PostList extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.postMetaData = {"id": "번호", "title": "제목", "nickname":"작성자 닉네임", "writtenDate": "작성 날짜"};
    }

    render() {
        return(
            <div className="vertical-align-grid">
                 {RowTable(this.postMetaData)}
                {this.props.posts.map((post) => 
                  RowTable(post)
                )}
            </div>
        )
    }
}