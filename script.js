const carta = document.getElementById("carta");
const capa = document.querySelector(".capa");
const paginas = document.querySelectorAll(".pagina");

const paginasViraveis = paginas.length - 1;

let paginaAtual = -1;
let voltando = false;

carta.addEventListener("click", () => {

  if (!voltando) {

    if (paginaAtual === -1) {
      capa.classList.add("aberta");
      paginaAtual = 0;
      return;
    }

    if (paginaAtual < paginasViraveis) {
      paginas[paginaAtual].classList.add("virada");
      paginaAtual++;

      if (paginaAtual === paginasViraveis) {
        voltando = true;
      }
      return;
    }
  }

  if (voltando) {

    if (paginaAtual > 0) {
      paginaAtual--;
      paginas[paginaAtual].classList.remove("virada");
      return;
    }

    if (paginaAtual === 0) {
      capa.classList.remove("aberta");
      paginaAtual = -1;
      voltando = false;
      return;
    }
  }

});
