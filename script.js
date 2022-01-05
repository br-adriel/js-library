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

const ocultarModal = () => (fundoModal.style.display = "none");

// Inputs do formulario
const inputTitulo = document.getElementById("form-titulo");
const inputAutor = document.getElementById("form-autor");
const inputPaginas = document.getElementById("form-paginas");
const inputLido = document.getElementById("form-lido");

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  enviarForm(e);
});

function enviarForm(e) {
  e.preventDefault();
  adicionarNaBiblioteca();
  ocultarModal();
  form.reset();
}

function adicionarNaBiblioteca() {
  if (
    // verifica se os campos estao preenchidos
    inputTitulo.value !== "" &&
    inputAutor.value !== "" &&
    inputPaginas.value !== ""
  ) {
    const novoLivro = new Livro(
      inputTitulo.value,
      inputAutor.value,
      inputPaginas.value,
      inputLido.checked
    );
    minhaBiblioteca.push(novoLivro);
  }
}
