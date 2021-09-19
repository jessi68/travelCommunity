import { Component } from "react";
import { Link } from "react-router-dom";
import createMockQnAPostsData from "../../model/qnaPostMockData";
import PostList from "./PostList/PostList";
import "./QnABoard.scss";
import { withRouter } from "react-router-dom";


export default class QnABoard extends Component {

    static POST_NUMBER_LIMIT = 10;

    constructor(props) {
        super(props);
        const posts = createMockQnAPostsData();
        this.state = {"posts": posts, "postPageNumber": posts.length  / QnABoard.POST_NUMBER_LIMIT,
                     "startIndex": 0,
                    "endIndex": 10};
        this.changeShownPosts.bind(this);
       
    }

    changeShownPosts = ({target: {innerText}}) => {
      const pageNumber = parseInt(innerText.toString().slice(1, innerText.length));
      const startIndex = (pageNumber - 1) * 10
      this.setState({
         ...this.state,
         "startIndex": startIndex, 
         "endIndex": startIndex  + 10
      });
    }

    render() {

       return ( 
       <div className="vertical-align">
           <PostList posts={this.state.posts.slice(this.state.startIndex, this.state.endIndex)}></PostList>
            <div className="row-align">
            <div className="post-numbers">
                {Array.apply(null,  {length: this.state.postPageNumber}).map(
                    (_, pageNumber) => 
                    <PostPageNumber pageNumber={pageNumber} changeShownPosts={this.changeShownPosts}></PostPageNumber>
                    // <div className="number" key={"pageNumber" + pageNumber.toString()}
                    //      onClick={this.changeShownPosts} value={(pageNumber + 1).toString()}>
                    //     {"[" + (pageNumber + 1).toString() + "]"}
                    // </div>
                )
                }
                <Link to="/add-review">
                    <button className="question-add">글쓰기</button>
                </Link>
            </div>
            
            </div>
       </div>     
        
        )
        ;
    }
}

function PostPageNumber(props)  {
    return (
        <div className="number" key={"pageNumber" + props.pageNumber.toString()}
                         onClick={props.changeShownPosts} value={(props.pageNumber + 1).toString()}>
                        {"[" + (props.pageNumber + 1).toString() + "]"}
       </div>
    );
}