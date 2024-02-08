const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();
recognition.addEventListener("result", onSpeak);

function onSpeak(evento) {
  chute = evento.results[0][0].transcript;
  exibeChuteNaTela();
  verificaçãoChute();
}

function exibeChuteNaTela() {
  elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>`;
}

recognition.addEventListener("end", () => {
  recognition.start();
});
