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
      console.log(posts);
    });
}

function newPost() {}
