const addHashTagToPost = function (myTags){
    fetch('http://localhost:8080/posts',{
        method:'HASHTAG',
        body: JSON.stringify({
            subject:myTags,
        }),
        headers: {
            "Content-type":"application/json",
        }
    })   

}
export {addHashTagToPost};