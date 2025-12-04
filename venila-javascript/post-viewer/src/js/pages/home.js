import {getPost} from "../api/postsApi.js";

async function loadPost (){
    const data = await getPost();
    renderPosts(data)
}

function renderPosts (posts){
    const container = document.querySelector("#posts-container");
    container.innerHTML = "";

    posts.forEach((post)=>{
        const card = document.createElement("div");
        card.className = "post-card";

        card.innerHTML = `
            <img src=${post.postImg} alt="${post.tile}" class="post-img"/>
            <div class="post-content">
                <h3>${post.title}</h3>
                <p class="post-body">${post.body}</p>
                <p class="post-user">By: ${post.userName}</p>
                <button data-id="${post._id}">View Details</button>
            </div>`;
        card.querySelector("button").addEventListener("click", ()=>{
            window.location.href = `./details.html?id=${post._id}`
        })
        container.appendChild(card);
    })

}

loadPost()