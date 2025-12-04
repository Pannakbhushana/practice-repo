import { getPost } from "../api/postsApi.js";

const urlParams = new URLSearchParams(window.location.search)
const postId = urlParams.get("id");

async function loadDetailPost (){
    const data = await getPost(postId)
    renderPostDetails(data[0])
}

function renderPostDetails (post) {
    const contener = document.getElementById("details-contener");
    contener.innerHTML = "";

    const card = document.createElement("div");
    card.className = "details-card";
    card.innerHTML = `
    <img src="${post.postImg}"  alt="" class="detail-img"/>
    <div class="child-card">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p>By: ${post.userName}</p>
    </div>
    `
    contener.appendChild(card);
}

loadDetailPost()