const clearLoginChildren = function (){
    while (post.hasChildNodes()) {
        post.removeChild(post.lastChild);
    }
}

export {clearLoginChildren};