const perguntas = [
  {
    pergunta: "Quem foi levado cativo para a Babilônia no capítulo 1?",
    opcoes: ["Daniel e seus amigos", "Ezequiel e Jeremias", "Nabucodonosor", "Zedequias"],
    correta: 0
  },
  {
    pergunta: "O que Daniel recusou comer na corte da Babilônia?",
    opcoes: ["Pão", "Frutas", "Carne e vinho do rei", "Peixe"],
    correta: 2
  },
  {
    pergunta: "Quantos dias durou o teste alimentar de Daniel e seus amigos?",
    opcoes: ["3 dias", "7 dias", "10 dias", "21 dias"],
    correta: 2
  },
  {
    pergunta: "Quem deu novos nomes a Daniel e seus amigos?",
    opcoes: ["O rei Davi", "O chefe dos eunucos", "Nabucodonosor", "Beltesazar"],
    correta: 1
  },
  {
    pergunta: "Qual era o novo nome de Daniel na Babilônia?",
    opcoes: ["Misael", "Azarias", "Abede-Nego", "Beltesazar"],
    correta: 3
  },
  {
    pergunta: "O que o rei Nabucodonosor exigiu dos sábios no capítulo 2?",
    opcoes: ["Que fizessem um banquete", "Que interpretassem um sonho que ele não contou", "Que curassem sua doença", "Que escrevessem uma nova lei"],
    correta: 1
  },
  {
    pergunta: "Quem revelou o sonho de Nabucodonosor a Daniel?",
    opcoes: ["Um anjo", "Gabriel", "Deus", "Arcanjo Miguel"],
    correta: 2
  },
  {
    pergunta: "Qual era a cabeça da estátua no sonho do rei?",
    opcoes: ["Prata", "Bronze", "Ferro", "Ouro"],
    correta: 3
  },
  {
    pergunta: "O que representava a pedra que destruiu a estátua?",
    opcoes: ["A Babilônia", "O Império Romano", "O Reino de Deus", "Um rei perverso"],
    correta: 2
  },
  {
    pergunta: "O que Nabucodonosor fez após Daniel interpretar o sonho?",
    opcoes: ["Mandou matá-lo", "O promoveu", "O expulsou da Babilônia", "Riu dele"],
    correta: 1
  },
  {
    pergunta: "Qual decreto o rei fez no capítulo 3?",
    opcoes: ["Ninguém pode orar", "Todos devem adorar a estátua de ouro", "A Babilônia será destruída", "Daniel será morto"],
    correta: 1
  },
  {
    pergunta: "Quem foi lançado na fornalha de fogo?",
    opcoes: ["Daniel", "Sadraque, Mesaque e Abede-Nego", "Ezequiel", "Belsazar"],
    correta: 1
  },
  {
    pergunta: "Quantas pessoas foram vistas dentro da fornalha?",
    opcoes: ["2", "3", "4", "5"],
    correta: 2
  },
  {
    pergunta: "Como os três jovens saíram da fornalha?",
    opcoes: ["Queimados", "Mortos", "Com roupas chamuscadas", "Sem um fio de cabelo chamuscado"],
    correta: 3
  },
  {
    pergunta: "O que Nabucodonosor declarou após o milagre da fornalha?",
    opcoes: ["Que mataria os judeus", "Que serviria ao Deus de Israel", "Que era um deus", "Que queimaria Daniel"],
    correta: 1
  },
  {
    pergunta: "No capítulo 4, qual foi o novo sonho de Nabucodonosor?",
    opcoes: ["Uma árvore enorme que foi cortada", "Uma estátua caída", "Um leão rugindo", "Uma serpente voadora"],
    correta: 0
  },
  {
    pergunta: "O que significava a árvore cortada no sonho?",
    opcoes: ["A morte do rei", "A Babilônia seria invadida", "A humilhação e restauração do rei", "A queda de Israel"],
    correta: 2
  },
  {
    pergunta: "Por quanto tempo Nabucodonosor viveria como animal?",
    opcoes: ["3 anos", "7 tempos", "1 tempo", "12 meses"],
    correta: 1
  },
  {
    pergunta: "O que Nabucodonosor reconheceu após ser restaurado?",
    opcoes: ["Que ele era o maior rei", "Que o Deus de Daniel era soberano", "Que os magos eram poderosos", "Que devia morrer"],
    correta: 1
  },
  {
    pergunta: "Quem era Belsazar?",
    opcoes: ["Filho de Daniel", "Rei da Pérsia", "Filho de Nabucodonosor", "Rei babilônico, sucessor de Nabucodonosor"],
    correta: 3
  },
  {
    pergunta: "O que Belsazar usou em sua festa?",
    opcoes: ["Taças sagradas do templo", "Cálices da Pérsia", "Taças de madeira", "Copos de ouro comum"],
    correta: 0
  },
  {
    pergunta: "O que apareceu na parede durante o banquete?",
    opcoes: ["Uma espada flamejante", "Fumaça", "A mão que escreveu uma mensagem", "Um anjo"],
    correta: 2
  },
  {
    pergunta: "Qual era a mensagem escrita na parede?",
    opcoes: ["Paz, justiça, glória", "Deus venceu", "MENE, MENE, TEQUEL, PARSIM", "Viva o rei para sempre"],
    correta: 2
  },
  {
    pergunta: "Quem interpretou a escrita na parede?",
    opcoes: ["Os magos", "Belsazar", "Daniel", "Um sacerdote"],
    correta: 2
  },
  {
    pergunta: "O que significava 'TEQUEL'?",
    opcoes: ["Pesado na balança e achado em falta", "Dividido", "Reinado encerrado", "Nação restaurada"],
    correta: 0
  },
  {
    pergunta: "O que aconteceu com Belsazar naquela noite?",
    opcoes: ["Foi exilado", "Se converteu", "Foi morto", "Fugiu para o Egito"],
    correta: 2
  },
  {
    pergunta: "Quem assumiu o reino após Belsazar?",
    opcoes: ["Dario, o medo", "Ciro", "Daniel", "Arioque"],
    correta: 0
  },
  {
    pergunta: "O que levou Daniel à cova dos leões?",
    opcoes: ["Blasfêmia", "Roubo", "Orar a Deus apesar do decreto", "Se rebelar contra o rei"],
    correta: 2
  },
  {
    pergunta: "Por quantos dias o decreto dizia para não orar?",
    opcoes: ["3 dias", "7 dias", "21 dias", "30 dias"],
    correta: 3
  },
  {
    pergunta: "O que o rei Dario fez após Daniel ser jogado na cova?",
    opcoes: ["Fugiu", "Ficou em jejum", "Fez festa", "Matou os invejosos"],
    correta: 1
  },
  {
    pergunta: "Como Daniel saiu da cova?",
    opcoes: ["Ferido", "Com medo", "Ileso, pois Deus fechou a boca dos leões", "Com ajuda do rei"],
    correta: 2
  },
  {
    pergunta: "Como eram chamados os amigos de Daniel antes de receberem nomes babilônicos?",
    opcoes: ["Hananias, Misael e Azarias", "Sadraque, Mesaque e Abede-Nego", "Eliezer, Natanael e Tobias", "Abel, Simeão e Levi"],
    correta: 0
  },
  {
    pergunta: "Qual foi a reação de Nabucodonosor ao ver quatro homens na fornalha?",
    opcoes: ["Ficou furioso", "Adorou a imagem", "Assustou-se e levantou-se depressa", "Chorou de alegria"],
    correta: 2
  },
  {
    pergunta: "Quem sugeriu que Daniel interpretasse a escrita na parede?",
    opcoes: ["O próprio Belsazar", "O rei Dario", "A rainha", "Um soldado"],
    correta: 2
  },
  {
    pergunta: "Daniel interpretou que o reino de Belsazar seria dado a quem?",
    opcoes: ["Os judeus", "Os egípcios", "Os persas e medos", "Os gregos"],
    correta: 2
  },
  {
    pergunta: "Quantas vezes ao dia Daniel orava?",
    opcoes: ["1", "2", "3", "4"],
    correta: 2
  },
  {
    pergunta: "Em qual direção Daniel orava?",
    opcoes: ["Para a Babilônia", "Para o templo em Jerusalém", "Para o palácio real", "Para o norte"],
    correta: 1
  },
  {
    pergunta: "Quem tramou contra Daniel no capítulo 6?",
    opcoes: ["Os caldeus", "Outros presidentes e sátrapas", "Os hebreus", "Os magos"],
    correta: 1
  },
  {
    pergunta: "Qual rei foi enganado para assinar o decreto contra orações?",
    opcoes: ["Nabucodonosor", "Dario", "Ciro", "Belsazar"],
    correta: 1
  },
  {
    pergunta: "O que o rei Dario fez logo ao amanhecer após Daniel ser jogado na cova?",
    opcoes: ["Mandou jogar os acusadores", "Foi à cova e chamou por Daniel", "Fugiu", "Desistiu do trono"],
    correta: 1
  },
  {
    pergunta: "O que Daniel disse ao rei de dentro da cova?",
    opcoes: ["\"Estou ferido\".", "\"Estou em paz\".", "\"Meu Deus enviou um anjo e fechou a boca dos leões\".", "\"Foi um erro\"."],
    correta: 2
  },
  {
    pergunta: "O que aconteceu com os acusadores de Daniel?",
    opcoes: ["Foram presos", "Foram exilados", "Foram lançados na cova e mortos", "Nada"],
    correta: 2
  },
  {
    pergunta: "Que atitude o rei Dario teve após o livramento de Daniel?",
    opcoes: ["Mandou prender os judeus", "Publicou um decreto exaltando o Deus de Daniel", "Repreendeu Daniel", "Mandou reconstruir Jerusalém"],
    correta: 1
  },
  {
    pergunta: "O que foi observado em Daniel que causou inveja nos outros líderes?",
    opcoes: ["Sua beleza", "Seu espírito excelente", "Sua fortuna", "Seus sonhos"],
    correta: 1
  },
  {
    pergunta: "Quantas vezes Daniel foi promovido entre os capítulos 1 e 6?",
    opcoes: ["1", "2", "3", "4"],
    correta: 2
  },
  {
    pergunta: "Qual era a punição prevista no decreto que proibia orar a qualquer deus ou homem?",
    opcoes: ["Prisão", "Morte por fogo", "Ser lançado na cova dos leões", "Exílio"],
    correta: 2
  },
  {
    pergunta: "O que a expressão 'MENE' significa na interpretação de Daniel?",
    opcoes: ["Dividido", "Pesado", "Contado", "Julgado"],
    correta: 2
  },
  {
    pergunta: "Quem reconheceu que Deus é quem revela mistérios?",
    opcoes: ["Daniel", "Nabucodonosor", "Dario", "Belsazar"],
    correta: 1
  },
  {
    pergunta: "Daniel atribuiu seus dons a si mesmo?",
    opcoes: ["Sim, ele era muito sábio", "Não, ele sempre deu crédito a Deus", "Sim, no início", "Nunca comentou"],
    correta: 1
  },
  {
    pergunta: "Qual atitude o rei esperava dos sábios quando teve o sonho da estátua?",
    opcoes: ["Que dessem conselhos", "Que acalmassem o povo", "Que revelassem o sonho e sua interpretação", "Que dessem presentes"],
    correta: 2
  },
  {
    pergunta: "O que Daniel pediu a seus amigos após saber do sonho do rei?",
    opcoes: ["Que fugissem", "Que jejuassem", "Que orassem a Deus", "Que se escondessem"],
    correta: 2
  }
];

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

    // Mostrar o link do PDF na tela
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
