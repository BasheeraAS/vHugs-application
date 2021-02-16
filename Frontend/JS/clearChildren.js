const clearLoginChildren = function (){
    while (post.hasChildNodes()) {
        post.removeChild(post.lastChild);
    }

    while (newPostDiv.hasChildNodes()) {
        newPostDiv.removeChild(newPostDiv.lastChild);
    }
}

export {clearLoginChildren};