const createLoginForm = ()=>{

    const form = 
    document.createElement("form"); 
    // form.setAttribute("method", "patch"); 
    form.setAttribute("action", "submit");
    form.setAttribute("id", "myForm");
    post.appendChild(form);

    const loginInput = document.createElement("input"); 
    loginInput.setAttribute("type", "text"); 
    loginInput.setAttribute("id", "username"); 
    loginInput.setAttribute("placeholder", "Username");
    document.getElementById("myForm").appendChild(loginInput);
}

const createLoginButton = () => {
    
    const loginButton = document.createElement("button");
    loginButton.setAttribute("type", "button");
    loginButton.setAttribute("value","submit");
    loginButton.innerText = "Login";
    post.appendChild(loginButton);
    return loginButton;
}

export{createLoginButton,createLoginForm};
