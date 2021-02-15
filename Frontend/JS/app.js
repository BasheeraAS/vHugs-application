import {createLoginButton,createLoginForm} from './createLogin.js';
import {createPostElement} from './createPostElement.js';
import {clearLoginChildren} from './clearChildren.js';
import {user} from './user.js';
let username = '';

createLoginForm();


createLoginButton().addEventListener("click",()=>{
     username = document.getElementById("username").value;
    let userObj = new user(username);
    console.log("login initiated. Username is: " + userObj.getUsername());
    clearLoginChildren();
    post.append(createPostElement(userObj));
    
})