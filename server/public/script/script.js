const appURL = "http://localhost:5000";
let divPosts = document.getElementById("posts");
let btnSubmit = document.getElementById("btn_submit_post");

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".needs-validation")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  btnSubmit.addEventListener("click", () => {
    newPost();
  });
  updatePosts();
});

function updatePosts() {
  fetch(appURL + "/api/all")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let posts = JSON.parse(json);
      let postsElement = "";
      posts.forEach((post) => {
        const cardPost = `<div id=${post.id} class="card col col-sm-3 m-1">
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
        postsElement += cardPost;
      });
      divPosts.innerHTML = postsElement;
    });
}

function newPost() {
  console.log("clicou para enviar");
}
