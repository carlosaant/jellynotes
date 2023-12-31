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
        const cardPost = `<div id=${post.id} class="card col col-sm-5 my-2">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h5 class="card-title col-10">${post.title}</h5>
          <button class="btn-close" aria-label="Delete" onclick="deletePost(${post.id})"></button>
        </div>
        <div class="card-body">
          <div class="card-text">${post.description}</div>
        </div>
        <div class="card-footer">
          <div class="card-text text-end">
           <small class="text-body-secondary">Created: ${post.date_created}</small>
          </div>
        </div>
        </div>`;
        postsElement += cardPost;
      });
      divPosts.innerHTML = postsElement;
    });
}

function deletePost(post) {
  const options = {
    method: "DELETE",
    headers: new Headers({ "content-type": "application/json" }),
  };
  fetch(appURL + `/api/del/${post.id}`, options)
    .then(updatePosts())
    .catch((err) => console.log(err));
}

function newPost() {
  if (
    document.getElementById("post_title").value !== "" &&
    document.getElementById("post_desc").value !== ""
  ) {
    let title = document.getElementById("post_title").value;
    let description = document.getElementById("post_desc").value;
    let post = { title, description };
    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(post),
    };

    fetch(appURL + "/api/new", options).then(() => {
      document.getElementById("post_title").value = "";
      document.getElementById("post_desc").value = "";
      updatePosts();
    });
  }
}
