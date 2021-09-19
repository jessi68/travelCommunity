
    
 let mockDataForQnaPosts = [];

let createMockPostsData = function() {
   
    if(mockDataForQnaPosts.length == 0){
        
        for(let i = 0; i < 100; i ++) {
        mockDataForQnaPosts.push({"id": i, "title":  "가짜데이터", "nickname":  "서윤", "writtenDate": "2021-09-18"});
        }
    }
    return mockDataForQnaPosts;
}

export default createMockPostsData;