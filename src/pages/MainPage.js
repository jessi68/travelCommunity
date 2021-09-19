import {
    Link
  } from "react-router-dom";
import createMockPostsData from "../api/qnaApi";
import PostList from "./NoticeBoard/PostList/PostList";




function MainPage() {
    const posts = createMockPostsData().slice(0, 10);
    console.log(posts);
    return (
        <div>
            <Link to="/add-review">
        <button>리뷰 추가하기</button>
        </Link>
        <PostList posts={posts}></PostList>
        </div>
    )
}

export default MainPage;