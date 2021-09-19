import { useState } from "react";
import "./EditPost.css";

function EditPost() {
    
    const [contentDesign, setContentDesign] = useState("content");

    const submitReview = (event) => {
      // review 를 벡엔드에 보내는 api 불러오기 
    }
    
    const addBlinking = () => {
        setContentDesign(contentDesign + " blinking");
    }

    const deleteBlinking = () => {
        setContentDesign("content");
    }
    

    return (
        <div className="container">
        <input placeholder="제목을 입력해주세요." className="title">
        </input>
        <textarea placeholder="내용을 입력해주세요." className={contentDesign} onFocus={addBlinking} onBlur={deleteBlinking}></textarea>
        <button onClick={submitReview}>제출하기 </button>
        </div>
    )
}

export default EditPost;