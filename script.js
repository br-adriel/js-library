let minhaBiblioteca = [];

function Livro(titulo, autor, paginas, foiLido = false) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.foiLido = foiLido;
}
