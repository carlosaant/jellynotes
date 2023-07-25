const express = require("express");
const app = express();
const posts = require("./model/posts");
const PORT = 5000;

// -------
// -------

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

app.post("/new", express.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let date_created = Date.now();

  posts.newPost(title, description, date_created);

  res.send("post adcionado");
});

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
