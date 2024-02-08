function verificaçãoChute() {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += `<div> <i class="fa-solid fa-xmark"></i> Valor inválido!</div>`;
    return;
  }

  if (chuteMaiouOuMenor(numero)) {
    elementoChute.innerHTML += `<div><i class="fa-solid fa-xmark"></i> Valor inválido, o número secreto precisa estar entre ${menorValor} e ${maiorValor} </div>`;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h2><i class="fa-solid fa-champagne-glasses"></i> Parabens! Você acertou! <i class="fa-solid fa-champagne-glasses"></i> </h2>
    <h3>O número secreto era ${numeroSecreto}! </h3>
    
    <button id='jogar-novamente' class='jogar-novamente'>jogar novamente</button>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div><i class="fa-solid fa-angle-down"></i> O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div><i class="fa-solid fa-angle-up"></i> O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function chuteMaiouOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (evento) => {
  if (evento.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
