const createNewPost = function(){
    const postForm = 
    document.createElement("form"); 
    postForm.setAttribute("method", "post"); 
    postForm.setAttribute("action", "submit");
    postForm.setAttribute("id", "myPostForm");
    post.appendChild(postForm);
    
    const postSubject = document.createElement("input"); 
    postSubject.setAttribute("type", "text"); 
    postSubject.setAttribute("id", "mySubject"); 
    postSubject.setAttribute("placeholder", "subject");
    document.getElementById("myPostForm").appendChild(postSubject);

    const postMessage = document.createElement("input"); 
    postMessage.setAttribute("type", "text"); 
    postMessage.setAttribute("id", "myMessage"); 
    postMessage.setAttribute("placeholder", "message");
    document.getElementById("myPostForm").appendChild(postMessage);
}

const createNewPostButton = function(){
    const newPostButton = document.createElement("button");
    newPostButton.setAttribute("type", "button");
    newPostButton.setAttribute("value","submit");
    newPostButton.innerText = "Add Post";
    newPostDiv.appendChild(newPostButton);
    return newPostButton;
}

const addPostButton = function(){
    const addPostButton = document.createElement("button");
    addPostButton.setAttribute("type", "button");
    addPostButton.setAttribute("value","submit");
    addPostButton.innerText = "Add the Post";
    post.appendChild(addPostButton);
    return addPostButton;
}

export {createNewPost,createNewPostButton,addPostButton};
