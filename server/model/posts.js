module.exports = {
  posts: [
    {
      id: "dsdsdsas",
      title: "Teste",
      description: "fsdfdfsdfsdf",
      date_created: null,
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description, date_created) {
    this.posts.push({ id: idGenerator(), title, description, date_created });
  },

  deletePost(id) {},
};

function idGenerator() {
  //usando base 36 para gerar (com letras, numeros etc) e substring para pegar apos o . do numero gerado
  return Math.random().toString(36).substr(2, 9);
}
