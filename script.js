let minhaBiblioteca = [];
let id = 1;

function Livro(
  titulo,
  autor,
  publicacao,
  paginas,
  foiLido = false,
  favorito = false
) {
  this.id = id;
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
    id++;
  }
}

// funcao para evento de clique em botao favorito
function marcarFavorito(e) {
  const livro = document.getElementById(`livro-${e.currentTarget.dataset.id}`);
  livro.classList.toggle("favorito");
  minhaBiblioteca.forEach((livro) => {
    if (livro.id == e.currentTarget.dataset.id) {
      livro.favorito = !livro.favorito;
    }
  });
}

// gera elemento html do botao favorito
function btnFavoritoHtml(livro) {
  const btnFavorito = document.createElement("button");
  const btnFavoritoIcone = document.createElement("i");

  btnFavorito.setAttribute("data-id", livro.id);
  btnFavorito.addEventListener("click", (e) => marcarFavorito(e));
  btnFavoritoIcone.classList.add("fas", "fa-heart");
  btnFavorito.classList.add("btn-favorito");
  btnFavorito.appendChild(btnFavoritoIcone);
  return btnFavorito;
}

// gera elemento html do botao marcar lido
function btnLidoHtml(livro) {
  const btnLido = document.createElement("button");
  const btnLidoIcone = document.createElement("i");

  btnLido.setAttribute("data-id", livro.id);
  btnLidoIcone.classList.add("fas", "fa-check");
  btnLido.classList.add("btn-lido");
  btnLido.appendChild(btnLidoIcone);
  return btnLido;
}

// gera elemento html do botao apagar
function btnApagarHtml(livro) {
  const btnApagar = document.createElement("button");
  const btnApagarIcone = document.createElement("i");

  btnApagar.setAttribute("data-id", livro.id);
  btnApagarIcone.classList.add("fas", "fa-trash");
  btnApagar.classList.add("btn-apagar");
  btnApagar.appendChild(btnApagarIcone);
  return btnApagar;
}

// gera elemento html para livro
function livroParaHtml(livro) {
  // card de livro
  const html = document.createElement("div");
  html.classList.add("livro");
  html.setAttribute("id", `livro-${livro.id}`);
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

  pubIcone.classList.add("far", "fa-calendar-alt");
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

  const btnApagar = btnApagarHtml();
  acoes.appendChild(btnApagar);

  const btnFavorito = btnFavoritoHtml(livro);
  acoes.appendChild(btnFavorito);

  const btnLido = btnLidoHtml(livro);
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

// botoes de filtro
const btnsFiltro = document.querySelectorAll(".filtro button");
btnsFiltro.forEach((btn) => {
  btn.addEventListener("click", (e) => clicarFiltro(e));
});

// lida com a mudanca visual do botao
function clicarFiltro(e) {
  btnsFiltro.forEach((btn) => {
    if (btn.id === e.currentTarget.id) {
      btn.classList.add("selecionado");
    } else {
      btn.classList.remove("selecionado");
    }
  });
}

function filtrarTodos() {
  const tam = livrosSection.children.length;

  for (let i = 0; i < tam; i++) {
    livrosSection.children[i].style.display = "flex";
  }
}

function filtrarLidos() {
  const tam = livrosSection.children.length;

  for (let i = 0; i < tam; i++) {
    if (livrosSection.children[i].classList.contains("lido")) {
      livrosSection.children[i].style.display = "flex";
    } else {
      livrosSection.children[i].style.display = "none";
    }
  }
}

function filtrarNaoLidos() {
  const tam = livrosSection.children.length;

  for (let i = 0; i < tam; i++) {
    if (livrosSection.children[i].classList.contains("lido")) {
      livrosSection.children[i].style.display = "none";
    } else {
      livrosSection.children[i].style.display = "flex";
    }
  }
}

function filtrarFavoritos() {
  const tam = livrosSection.children.length;

  for (let i = 0; i < tam; i++) {
    if (livrosSection.children[i].classList.contains("favorito")) {
      livrosSection.children[i].style.display = "flex";
    } else {
      livrosSection.children[i].style.display = "none";
    }
  }
}

btnsFiltro[0].addEventListener("click", filtrarTodos);
btnsFiltro[1].addEventListener("click", filtrarNaoLidos);
btnsFiltro[2].addEventListener("click", filtrarLidos);
btnsFiltro[3].addEventListener("click", filtrarFavoritos);
