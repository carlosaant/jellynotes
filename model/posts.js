module.exports = {
  posts: [
    {
      id: "010101",
      title: "Titulo Exemplo",
      description: "Descrição Exemplo para o Post",
      date_created: null,
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description, date_created) {
    this.posts.push({ id: idGenerator(), title, description, date_created });
  },

  deletePost(id) {
    this.posts = this.posts.filter((post) => post.id != id);
  },
};

function idGenerator() {
  //usando base 36 para gerar (com letras, numeros etc) e substring para pegar apos o . do numero gerado
  return Math.random().toString(36).substr(2, 9);
}
