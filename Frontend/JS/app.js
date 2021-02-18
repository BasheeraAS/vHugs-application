import {createLoginButton,createLoginForm} from './createLogin.js';
import {createPostElement} from './createPostElement.js';
import {clearLoginChildren} from './clearChildren.js';
import {user} from './user.js';
import {createNewPost,createNewPostButton,addPostButton} from './createNewPost.js';
import {addPostToData} from './addPostToData.js';

const post = document.getElementById("post");
let username = '';
let isLoggedIn = false;
const userObj = new user();


createLoginForm();


createLoginButton().addEventListener("click",()=>{
     username = document.getElementById("username").value;
    userObj.setUsername(username);
    console.log("login initiated. Username is: " + userObj.getUsername());
    clearLoginChildren();
    post.append(createPostElement(userObj));
    isLoggedIn = true;
    createNewPostButton().addEventListener("click",() =>{
        clearLoginChildren();
        createNewPost();
        addPostButton().onclick=function(){
            addPostToData(document.getElementById("mySubject").value,document.getElementById("myMessage").value);
            clearLoginChildren();
            post.append(createPostElement(userObj));
            newPostDiv.append(createNewPostButton());
        }

    })
})


 
    // createNewPostButton().addEventListener("click",() =>{
    //     clearLoginChildren();
    //     createNewPost();
    //     addPostButton().onclick=function(){
    //         addPostToData(document.getElementById("mySubject").value,document.getElementById("myMessage").value);
    //         clearLoginChildren();
    //         post.append(createPostElement(userObj));
    //     }

    // })
    
        
   



