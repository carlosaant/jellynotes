const express = require("express");
const router = express.Router();
const cors = require("cors");
const posts = require("../model/posts");

const options = {
  origin: "http://localhost:5000",
};
router.use(cors());

router.get("/all", (req, res) => {
  res.json(JSON.stringify(posts.getAll()));
});

router.post("/new", express.json(), (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let date_created = Date.now();

  posts.newPost(title, description, date_created);

  res.send("post adcionado");
});

module.exports = router;
