let minhaBiblioteca = [];

function Livro(
  titulo,
  autor,
  publicacao,
  paginas,
  foiLido = false,
  favorito = false
) {
  this.titulo = titulo;
  this.autor = autor;
  this.publicacao = publicacao;
  this.paginas = paginas;
  this.foiLido = foiLido;
  this.favorito = favorito;
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
const inputFavorito = document.getElementById("form-favorito");

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
      inputLido.checked,
      inputFavorito.checked
    );
    minhaBiblioteca.push(novoLivro);
    addLivroNaSection(novoLivro);
  }
}

// gera elemento html para livro
function livroParaHtml(livro) {
  // card de livro
  const html = document.createElement("div");
  html.classList.add("livro");
  if (livro.foiLido) {
    html.classList.add("lido");
  }

  if (livro.favorito) {
    html.classList.add("favorito");
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

  // div de botoes de acao
  const acoes = document.createElement("div");
  acoes.classList.add("acoes");

  const btnApagar = document.createElement("button");
  const btnApagarIcone = document.createElement("i");

  btnApagarIcone.classList.add("fas", "fa-trash");
  btnApagar.classList.add("btn-apagar");
  btnApagar.appendChild(btnApagarIcone);
  acoes.appendChild(btnApagar);

  const btnFavorito = document.createElement("button");
  const btnFavoritoIcone = document.createElement("i");

  btnFavoritoIcone.classList.add("fas", "fa-heart");
  btnFavorito.classList.add("btn-favorito");
  btnFavorito.appendChild(btnFavoritoIcone);
  acoes.appendChild(btnFavorito);

  const btnLido = document.createElement("button");
  const btnLidoIcone = document.createElement("i");

  btnLidoIcone.classList.add("fas", "fa-check");
  btnLido.classList.add("btn-lido");
  btnLido.appendChild(btnLidoIcone);
  acoes.appendChild(btnLido);

  html.appendChild(acoes);

  return html;
}

// lida com a div que agrupa os cards dos livros
const livrosSection = document.getElementById("livros");

function addLivroNaSection(livro) {
  const htmlGerado = livroParaHtml(livro);
  livrosSection.appendChild(htmlGerado);
}
