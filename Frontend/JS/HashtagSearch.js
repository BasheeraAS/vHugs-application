const sectionElement = document.createElement('section');

const createHashTagSearchElement = function (addHashTagSearch){
    const hashtagSearchElement = document.createElement("div");
    HashtagSearch.innerHTML = ` ${user.searchHashtags()}`
    hashtagSearchElement.classList.add("hashtagSearch");
    
        console.log('create a hashtag search')
        
        return Hashtags;
        }

        const createNewHashtagSearchButton = function(){
            const newHashTagSearchButton = document.createElement("button");
            newHashtagSearchButton.setAttribute("type", "button");
            newHashtagSearchButton.setAttribute("type","submit");
            newHashtagSearchButton.innerText = "Search Hashtags";
            newHashtagSearchDiv.appendChild(newHashtagSearchButton);
            return newHashtagSearchButton;

        }