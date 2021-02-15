const createPostElement = function (user){
    const postElement = document.createElement("div");
    const postHeader = document.createElement("span");
    postHeader.innerHTML = `Welcome ${user.getUsername()}`
    postElement.classList.add("postEle");
    postHeader.classList.add("postHeader");

    fetch('http://localhost:8080/posts')
    .then(res => res.json())
    .then(allPosts =>{
            allPosts.map(post =>{
                
                const mainElement = document.createElement('main');
                const sectionElement = document.createElement('section');
                const postSubject = document.createElement('h3');
                const postBody = document.createElement('p');
                postSubject.innerHTML = 'Subject: ' + post.subject;
                postBody.innerHTML = 'Body: ' + post.body;
                mainElement.append(sectionElement);
                sectionElement.append(postSubject,postBody);
                postElement.append(mainElement);  

                post.replies.map(replyRes =>{
                    const postReply = document.createElement('p');
                    postReply.innerHTML ='replies: ' + replyRes.message;
                    sectionElement.append(postReply);
                })
            })
            console.log(allPosts) 
    })
postElement.append(postHeader);
return postElement;
}


export {createPostElement};