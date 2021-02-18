
const sectionElement = document.createElement('section');

const createPostElement = function (user){
    const postElement = document.createElement("div");
    const postHeader = document.createElement("span");
    
    postHeader.innerHTML = `Welcome ${user.getUsername()}`
    postElement.classList.add("postEle");
    postHeader.classList.add("postHeader");
        console.log('create post element hit')
        
        const createReplyInput = function(){
            const postReply = document.createElement("input"); 
            postReply.setAttribute("type", "text"); 
            postReply.setAttribute("id", "myReply"); 
            postReply.setAttribute("placeholder", "reply");
            
            return postReply;
        }

        
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
                sectionElement.append(createReplyInput());
                

                const postReply = document.createElement('button');
                    postReply.innerHTML ='View Post';
                    sectionElement.append(postReply);

                    
                    
                    postReply.addEventListener("click",()=> {
                        const postReplyButton = document.createElement("button");
                    postReplyButton.innerHTML="Post Reply";
                    sectionElement.append(postReplyButton);
                   
                    
                        post.replies.map(replyRes =>{
                            console.log(replyRes.message);
                            const replyText = document.createElement('p');
                            replyText.innerHTML = replyRes.message;
                            sectionElement.append(replyText);
                            const replyToAdd = document.getElementById("myReply").value;
                          
                            
                            
    
                            
                           
                            postReplyButton.onclick=()=>{
                                
                                console.log('Adding Reply ' + replyToAdd);
                                
                                fetch(`http://localhost:8080/${post.id}/replies`,{
                                    method:"PATCH",
                                    body: JSON.stringify({
                                        message:replyToAdd,
                                    }),
                                    headers: {
                                        "Content-type":"application/json",
                                    }
                                })
                                .then(getAllReplyForPost(post.id))
                                
                            
                            }
                    })
                    })
            })
            console.log(allPosts) 
    })
postElement.append(postHeader);
return postElement;
}

const getAllReplyForPost = function(postId){
    console.log('postId is ' + postId);
    fetch(`http://localhost:8080/${postId}/getReplies`)
    .then(res => res.json())
    .then(replyResponse => {
        replyResponse.map(repRes=>{ 
            
            const newReplyText = document.createElement('p');
            newReplyText.innerHTML = repRes.message;
            sectionElement.append(newReplyText);
            return newReplyText;
        })
    })
}

const createReplyButton = function(){
    const postReplyButton = document.createElement("button");
    postReplyButton.innerHTML="Post Reply";
    postReplyButton.onclick=()=>{
        console.log('Adding Reply to ' + post.id);
        fetch(`http://localhost:8080/${post.id}/replies`,{
            method:"PATCH",
            body: JSON.stringify({
                message:createReplyInput(),
            }),
            headers: {
                "Content-type":"application/json",
            }
        })
    }
    return postReplyButton;
}




export {createPostElement};