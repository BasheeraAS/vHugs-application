

const addPostToData = function (mySubject,myBody){
    fetch('http://localhost:8080/posts',{
        method:'POST',
        body: JSON.stringify({
            subject:mySubject,
            body:myBody
        }),
        headers: {
            "Content-type":"application/json",
        }
    })   

}
export {addPostToData};