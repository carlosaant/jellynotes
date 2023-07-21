const express = require("express");
const app = express();
const PORT = 5000;

// -------
let posts = [
  {
    id: "dsdsdsas",
    title: "Teste",
    description: "fsdfdfsdfsdf",
    date_created: null,
  },
  {
    id: "dsdsdsas2",
    title: "Teste2",
    description: "fsdfdfsdfsdf",
    date_created: null,
  },
];
// -------

app.get("/all", (req, res) => {
  res.json(JSON.stringify(posts));
});

app.post("/new", express.json(), (req, res) => {
  let id = idGenerator();
  let title = req.body.title;
  let description = req.body.description;
  let date_created = Date.now();

  posts.push({ id, title, description, date_created });
  res.send("post adcionado");
});

function idGenerator() {
  //usando base 36 para gerar (com letras, numeros etc) e substring para pegar apos o . do numero gerado
  return Math.random().toString(36).substr(2, 9);
}

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
