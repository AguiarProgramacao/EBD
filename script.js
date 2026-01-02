import { perguntas } from "./perguntas.js";

document.getElementById("buttonAviso").addEventListener("click", mostrarAviso);
document.getElementById("iniciarQuest").addEventListener("click", () => {
  ativarModoFoco(); 
  iniciarQuestionario();
});
document.getElementById("responder").addEventListener("click", responder);
document.getElementById("ler").addEventListener("click", lerPergunta);
document.getElementById("fecharModal").addEventListener("click", fecharModalAlerta);

let perguntasEmbaralhadas = [];
let indexAtual = 0;
let acertos = 0;
let nomeUsuario = "";
let tempoRestante = 3600;
let intervalo;
let tempoInicial = 0;
let tempoFinal = 0;
let respostasUsuario = [];
let telaSegura = false;

function mostrarAviso() {
  nomeUsuario = document.getElementById("nome").value;
  if (!nomeUsuario.trim()) return alert("Digite seu nome!");
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("aviso").classList.remove("hidden");
}

function iniciarQuestionario() {
  tempoInicial = Date.now();
  document.getElementById("aviso").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  perguntasEmbaralhadas = perguntas.sort(() => 0.5 - Math.random());
  mostrarPergunta();
  iniciarTimer();
  ativarModoFoco();
}

function mostrarPergunta() {
  const p = perguntasEmbaralhadas[indexAtual];
  const container = document.getElementById("pergunta-container");
  container.innerHTML = `<div class='question'><strong>${indexAtual + 1}. ${p.pergunta}</strong><br/>`;
  p.opcoes.forEach((op, i) => {
    container.innerHTML += `<div class='option'><label><input type='radio' name='resposta' value='${i}'/> ${op}</label></div>`;
  });
  container.innerHTML += `</div>`;
}

function responder() {
  const resposta = document.querySelector("input[name='resposta']:checked");
  if (!resposta) {
    telaSegura = true;
    mostrarModalAlerta("Selecione uma opção!");
    telaSegura = false;
    return;
  }

  const perguntaAtual = perguntasEmbaralhadas[indexAtual];
  const correta = parseInt(resposta.value) === perguntaAtual.correta;
  if (correta) acertos++;

  respostasUsuario.push({
    pergunta: perguntaAtual.pergunta,
    respostaUsuario: perguntaAtual.opcoes[parseInt(resposta.value)],
    respostaCorreta: perguntaAtual.opcoes[perguntaAtual.correta]
  });

  indexAtual++;
  if (indexAtual >= perguntas.length) return finalizar();
  mostrarPergunta();
}

function iniciarTimer() {
  intervalo = setInterval(() => {
    tempoRestante--;
    const min = String(Math.floor(tempoRestante / 60)).padStart(2, '0');
    const seg = String(tempoRestante % 60).padStart(2, '0');
    document.getElementById("timer").innerText = `Tempo restante: ${min}:${seg}`;
    if (tempoRestante <= 0) finalizar();
  }, 1000);
}

function ativarModoFoco() {
  const el = document.documentElement;

  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }

  window.onblur = () => {
    if (!telaSegura) cancelarProva();
  };
}

function cancelarProva() {
  clearInterval(intervalo);
  alert("Você saiu da tela! A prova foi cancelada.");
  location.reload();
}

function lerPergunta() {
  const p = perguntasEmbaralhadas[indexAtual];
  if (!p) return;

  const texto = `${p.pergunta}. As opções são: ${p.opcoes.join(", ")}`;

  try {
    if (typeof responsiveVoice !== "undefined") {
      responsiveVoice.speak(texto, "Brazilian Portuguese Female");
    } else {
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = "pt-BR";
      utterance.rate = 1;
      speechSynthesis.speak(utterance);
    }
  } catch (e) {
    alert("Erro ao tentar falar: " + e.message);
  }
}

function finalizar() {
  clearInterval(intervalo);
  document.exitFullscreen();
  document.getElementById("quiz").classList.add("hidden");

  const porcentagem = (acertos / perguntas.length) * 100;
  let mensagem = "";
  if (porcentagem < 50) mensagem = "Pelo visto não estudou!";
  else if (porcentagem < 70) mensagem = "Foi bom, mas pode melhorar";
  else mensagem = "Excelente, sinal que tem estudado";

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.classList.remove("hidden");
  resultadoDiv.innerHTML = "";
  resultadoDiv.innerHTML = `
  <h3>Você acertou ${acertos} de ${perguntas.length}</h3>
  <p>${mensagem}</p>
  <div id="link-pdf" class="hidden" style="margin-top: 20px;"></div>
`;

  document.getElementById("resultado").classList.remove("hidden");

  tempoFinal = Date.now();
  const tempoGastoSegundos = Math.floor((tempoFinal - tempoInicial) / 1000);
  const minutos = Math.floor(tempoGastoSegundos / 60);
  const segundos = tempoGastoSegundos % 60;
  const tempoGastoFormatado = `${minutos}m ${segundos}s`;

  enviarParaPlanilha(tempoGastoFormatado);
}

function enviarParaPlanilha(tempoGastoFormatado) {
  gerarPDF(nomeUsuario, respostasUsuario, (pdfURL) => {
    const dados = {
      Nome: nomeUsuario,
      Acertos: acertos,
      TempoGasto: tempoGastoFormatado,
      LinkPDF: pdfURL
    };

    fetch("https://api.sheetmonkey.io/form/3m1vGSyKv9idvhSJwAdzVp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    });

    const linkDiv = document.getElementById("link-pdf");
    linkDiv.innerHTML = `
      <p><strong>Download do PDF com suas respostas:</strong></p>
      <a href="${pdfURL}" target="_blank" style="color: blue; text-decoration: underline;">
        Clique aqui para baixar o PDF
      </a>
    `;
    linkDiv.classList.remove("hidden");
  });
}

function mostrarModalAlerta(mensagem) {
  document.getElementById("modal-alerta-texto").innerText = mensagem;
  document.getElementById("modal-alerta").classList.remove("hidden");
}

function fecharModalAlerta() {
  document.getElementById("modal-alerta").classList.add("hidden");
}

function gerarPDF(usuario, respostas, callback) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h2>Respostas de ${usuario}</h2>
    ${respostas.map((r, i) => `
      <p><strong>${i + 1}. ${r.pergunta}</strong><br>
      Resposta do usuário: ${r.respostaUsuario}<br>
      Resposta correta: ${r.respostaCorreta}</p>
    `).join("")}
  `;

  const opt = {
    margin: 0.5,
    filename: `${usuario}-respostas.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(div).set(opt).outputPdf('blob').then(blob => {
    const url = URL.createObjectURL(blob);
    callback(url);
  });
}
