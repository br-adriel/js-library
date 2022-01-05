let minhaBiblioteca = [];

function Livro(titulo, autor, publicacao, paginas, foiLido = false) {
  this.titulo = titulo;
  this.autor = autor;
  this.publicacao = publicacao;
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
const inputPublicacao = document.getElementById("form-publicacao");
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
    inputPublicacao.value !== "" &&
    inputPaginas.value !== ""
  ) {
    const novoLivro = new Livro(
      inputTitulo.value,
      inputAutor.value,
      inputPublicacao.value,
      inputPaginas.value,
      inputLido.checked
    );
    minhaBiblioteca.push(novoLivro);
  }
}

// gera elemento html para livro
function livroParaHtml(livro) {
  // card de livro
  const html = document.createElement("div");
  html.classList.add("livro");
  if (livro.lido) {
    html.classList.add("lido");
  }

  // titulo do card
  const titulo = document.createElement("h3");
  titulo.innerText = livro.titulo;
  html.appendChild(titulo);

  // autor do card
  const autorP = document.createElement("p");
  const autorIcone = document.createElement("i");
  const autorSpan = document.createElement("span");

  autorIcone.classList.add("fas", "fa-user");
  autorP.appendChild(autorIcone);

  autorSpan.innerText = livro.autor;
  autorP.appendChild(autorSpan);

  html.appendChild(autorP);

  // publicacao
  const pubP = document.createElement("p");
  const pubIcone = document.createElement("i");
  const pubSpan = document.createElement("span");

  pubIcone.classList.add("fas", "fa-calendar-alt");
  pubP.appendChild(pubIcone);

  pubSpan.innerText = livro.publicacao;
  pubP.appendChild(pubSpan);

  html.appendChild(pubP);

  // numero de paginas
  const paginasP = document.createElement("p");
  const paginasIcone = document.createElement("i");
  const paginasSpan = document.createElement("span");

  paginasIcone.classList.add("fas", "fa-book-open");
  paginasP.appendChild(paginasIcone);

  paginasSpan.innerText = `${livro.paginas} páginas`;
  paginasP.appendChild(paginasSpan);

  html.appendChild(paginasP);

  return html;
}
