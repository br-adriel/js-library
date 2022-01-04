let minhaBiblioteca = [];

function Livro(titulo, autor, paginas, foiLido = false) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
  this.foiLido = foiLido;
}

// Implementacao do modal
const fundoModal = document.getElementById("fundo-modal");
const btnNovoLivro = document.getElementById("btn-novo-livro");
const btnFecharModal = document.getElementById("fechar-modal");

btnNovoLivro.addEventListener("click", () => {
  fundoModal.style.display = "flex";
});

btnFecharModal.addEventListener("click", (e) => {
  fundoModal.style.display = "none";
});
