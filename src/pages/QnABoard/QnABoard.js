import { Component } from "react";
import { Link } from "react-router-dom";
import createMockQnAPostsData from "../../model/qnaPostMockData";
import PostList from "./PostList/PostList";
import "./QnABoard.scss";



export default class QnABoard extends Component {

    static POST_NUMBER_LIMIT = 10;

    constructor(props) {
        super(props);
        const posts = createMockQnAPostsData();
        this.state = {"posts": posts, "postPageNumber": posts.length  / QnABoard.POST_NUMBER_LIMIT,
                     "startIndex": 0,
                    "endIndex": 10};
    }

    goToPage = ({target: {innerText}}) => {
     console.log(innerText);
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
                    <div className="number" key={"pageNumber" + pageNumber.toString()}
                         onClick={this.goToPage} value={(pageNumber + 1).toString()}>
                        {"[" + (pageNumber + 1).toString() + "]"}
                    </div>
                )
                }
            </div>
            </div>
            <div>
            <Link to="/add-review">
                <button className="question-add">글쓰기</button>
            </Link>
            </div>
       </div>     
        
        )
        ;
    }
}