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
        <div class="card-header">
          <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body d-flex">
          <div class="card-text col-10 pe-1">${post.description}</div>
          <div class="d-flex align-items-center">
            <button class="btn btn-danger btn-sm rounded-0" onclick="deletePost(${post.id})">Delete</button>
          </div>
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

function deletePost(id) {
  console.log(id);
}

function newPost() {
  if (
    document.getElementById("post_title").value !== "" &&
    document.getElementById("post_desc").value !== ""
  ) {
    let title = document.getElementById("post_title").value;
    let description = document.getElementById("post_desc").value;
    let post = { title, description };
    console.log(post);
    const options = {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(post),
    };

    fetch(appURL + "/api/new", options)
      .then((res) => {
        console.log(res);
      })
      .then(updatePosts());
  }
}
