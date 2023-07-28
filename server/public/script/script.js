const appURL = "http://localhost:5000";
let divPosts = document.getElementById("posts");

document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch(appURL + "/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let posts = JSON.parse(json);
      posts.forEach((post) => {
        const cardPost = `<div class="card mt-3">
        <div class="card-header">
          <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
          <div class="card-text">${post.description}</div>
        </div>
        <div class="card-footer">
          <div class="card-text">${post.date_created}</div>
        </div>
        </div>`;
        divPosts.innerHTML += cardPost;
      });
    });
}

function newPost() {}