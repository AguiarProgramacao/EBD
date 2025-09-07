const perguntas = [
  {
    pergunta: "Quem foi a mãe de Jesus segundo Mateus capítulo 1?",
    opcoes: ["Maria", "Elisabete", "Marta", "Ana"],
    correta: 0
  },
  {
    pergunta: "Quem recebeu em sonho a mensagem de não abandonar Maria?",
    opcoes: ["Pedro", "José", "Tiago", "João Batista"],
    correta: 1
  },
  {
    pergunta: "De onde vieram os magos que visitaram Jesus?",
    opcoes: ["Do Egito", "Do Oriente", "De Roma", "Da Galileia"],
    correta: 1
  },
  {
    pergunta: "Que presente os magos NÃO trouxeram?",
    opcoes: ["Ouro", "Incenso", "Mirra", "Prata"],
    correta: 3
  },
  {
    pergunta: "Para onde José levou Jesus e Maria para fugir de Herodes?",
    opcoes: ["Roma", "Nazaré", "Egito", "Belém"],
    correta: 2
  },
  {
    pergunta: "Quem pregava: 'Arrependei-vos, porque é chegado o reino dos céus'?",
    opcoes: ["Pedro", "João Batista", "Jesus", "Tiago"],
    correta: 1
  },
  {
    pergunta: "Como João Batista vestia-se?",
    opcoes: ["Roupas de linho fino", "Peles de camelo e cinto de couro", "Túnica de seda", "Roupas sacerdotais"],
    correta: 1
  },
  {
    pergunta: "O que João Batista comia no deserto?",
    opcoes: ["Pão e peixe", "Frutas e mel", "Gafanhotos e mel silvestre", "Carne e vinho"],
    correta: 2
  },
  {
    pergunta: "Quem batizou Jesus?",
    opcoes: ["Pedro", "Tiago", "João Batista", "O anjo Gabriel"],
    correta: 2
  },
  {
    pergunta: "O que aconteceu após Jesus ser batizado?",
    opcoes: ["Um anjo apareceu", "A pomba desceu e uma voz do céu falou", "O rio se abriu", "O sol escureceu"],
    correta: 1
  },
  {
    pergunta: "Quantos dias Jesus jejuou no deserto?",
    opcoes: ["10", "20", "30", "40"],
    correta: 3
  },
  {
    pergunta: "Qual foi a primeira tentação de Satanás?",
    opcoes: ["Adorar o diabo", "Transformar pedras em pães", "Atirar-se do pináculo do templo", "Reinar sobre o mundo"],
    correta: 1
  },
  {
    pergunta: "Quem Jesus chamou primeiro para segui-lo?",
    opcoes: ["Pedro e André", "Tiago e João", "Mateus e Bartolomeu", "Filipe e Natanael"],
    correta: 0
  },
  {
    pergunta: "Qual foi o tema principal do Sermão do Monte?",
    opcoes: ["A guerra contra Roma", "As bem-aventuranças e a justiça do Reino", "As leis judaicas", "As riquezas"],
    correta: 1
  },
  {
    pergunta: "Quem são chamados de 'bem-aventurados' porque verão a Deus?",
    opcoes: ["Os pobres", "Os mansos", "Os limpos de coração", "Os que choram"],
    correta: 2
  },
  {
    pergunta: "Segundo Jesus, os discípulos são o quê para o mundo?",
    opcoes: ["Luz e sal", "Guerreiros e profetas", "Juízes e reis", "Pastores e mestres"],
    correta: 0
  },
  {
    pergunta: "Jesus disse que não veio abolir a Lei, mas sim...",
    opcoes: ["Ignorar", "Reformar", "Cumprir", "Abolir mesmo assim"],
    correta: 2
  },
  {
    pergunta: "O que Jesus ensinou sobre amar os inimigos?",
    opcoes: ["Ignorá-los", "Orar por eles", "Vingar-se", "Condená-los"],
    correta: 1
  },
  {
    pergunta: "Como Jesus ensinou que devemos dar esmolas?",
    opcoes: ["Para sermos vistos", "Em secreto", "Na praça pública", "Com testemunhas"],
    correta: 1
  },
  {
    pergunta: "Qual oração Jesus ensinou no capítulo 6?",
    opcoes: ["Oração de Ana", "O Pai Nosso", "Salmo 23", "Cântico de Maria"],
    correta: 1
  },
  {
    pergunta: "O que Jesus ensinou sobre acumular tesouros?",
    opcoes: ["Guardar muito ouro", "Investir em terras", "Não ajuntar tesouros na terra, mas no céu", "Repartir somente com os ricos"],
    correta: 2
  },
  {
    pergunta: "Ninguém pode servir a dois senhores, disse Jesus. Quais?",
    opcoes: ["Deus e o diabo", "Deus e as riquezas (Mamom)", "Moisés e Elias", "Céu e terra"],
    correta: 1
  },
  {
    pergunta: "O que Jesus disse sobre a ansiedade em Mateus 6?",
    opcoes: ["Não vos inquieteis pelo dia de amanhã", "Acumulai reservas", "Consultai os magos", "Trabalhai sem cessar"],
    correta: 0
  },
  {
    pergunta: "Por que Jesus é conhecido como filho de Davi?",
    opcoes: ["Porque ele é filho de Davi", "Por causa da promessa messiânica", "Mateus não sabia de nada", "Porque Jesus é Jesus"],
    correta: 1
  },
  {
    pergunta: "Como é feita a contagem das gerações até Jesus?",
    opcoes: ["10 em 10 Gerações", "12 em 12 Gerações", "14 em 14 Gerações", "16 em 16 Gerações"],
    correta: 2
  },
  {
    pergunta: "O que Herodes queria fazer com Jesus?",
    opcoes: ["Adorá-lo", "Matá-lo", "Aprisioná-lo", "Dar Presentes"],
    correta: 1
  },
  {
    pergunta: "O que José pretendia fazer quando descobriu que Maria estava grávida?",
    opcoes: ["Pretendia abraçá-la", "Pretendia dançar", "Pretendia matá-la", "Pretendia anular o casamento"],
    correta: 3
  },
  {
    pergunta: "Onde Jesus nasceu?",
    opcoes: ["Belém do Pará", "Belém da Judéia", "Belém de Israel", "Belém de Nazaré"],
    correta: 1
  },
  {
    pergunta: "Qual significado do incenso?",
    opcoes: ["Divindade de Jesus", "Jesus seria cheiroso", "Realeza de Jesus", "Morte e Dor de Jesus"],
    correta: 0
  },
  {
    pergunta: "O que Herodes mandou fazer quando descobriu que foi enganado pelos magos?",
    opcoes: ["Que achassem os magos", "Que matassem os magos", "Que matassem todas as crianças de 2 anos para baixo", "Que achassem a Jesus"],
    correta: 2
  },
  {
    pergunta: "Quando Herodes morreu, quem estava reinando em seu lugar?",
    opcoes: ["Seu filho", "Seu neto", "Seu vizinho", "Seu Bisneto"],
    correta: 0
  },
  {
    pergunta: "Para qual cidade José foi depois que descobriu que Arquelau reinava na Judéia?",
    opcoes: ["Egito", "Babilônia", "Israel", "Nazaré"],
    correta: 3
  },

  // ---- Perguntas adicionais até chegar em 50 ----
  {
    pergunta: "Quem foi o pai de José, marido de Maria?",
    opcoes: ["Jacó", "Abraão", "Isaque", "Davi"],
    correta: 0
  },
  {
    pergunta: "Qual sinal o anjo deu a José em sonho?",
    opcoes: ["Que o filho seria chamado Emanuel", "Que Maria seria curada", "Que Jesus reinaria em Roma", "Que João seria o Messias"],
    correta: 0
  },
  {
    pergunta: "Que rei se perturbou ao ouvir sobre o nascimento de Jesus?",
    opcoes: ["Herodes", "Faraó", "César Augusto", "Nero"],
    correta: 0
  },
  {
    pergunta: "Qual profissão José tinha?",
    opcoes: ["Pastor", "Carpinteiro", "Sacerdote", "Médico"],
    correta: 1
  },
  {
    pergunta: "Qual foi a segunda tentação de Jesus?",
    opcoes: ["Atirar-se do pináculo do templo", "Transformar pedras em pães", "Adorar o diabo", "Reinar em Roma"],
    correta: 0
  },
  {
    pergunta: "Quem deixou suas redes imediatamente para seguir Jesus?",
    opcoes: ["Pedro e André", "Mateus e Judas", "Bartolomeu e Tomé", "Tiago e João"],
    correta: 0
  },
  {
    pergunta: "Jesus comparou os que praticam boas obras para serem vistos a quem?",
    opcoes: ["Profetas", "Hipócritas", "Discípulos", "Sacerdotes"],
    correta: 1
  },
  {
    pergunta: "Qual é a recompensa dos que dão esmolas em secreto?",
    opcoes: ["Ser vistos pelos homens", "O Pai que vê em secreto os recompensará", "Ser ricos", "Ser líderes"],
    correta: 1
  },
  {
    pergunta: "No Pai Nosso, o que pedimos sobre o pão?",
    opcoes: ["Pão nosso de cada dia nos dá hoje", "Pão de ouro", "Pão eterno", "Pão do sábado"],
    correta: 0
  },
  {
    pergunta: "O que Jesus disse sobre o olho?",
    opcoes: ["É a luz do corpo", "É enganoso", "É inútil", "Não serve para nada"],
    correta: 0
  },
  {
    pergunta: "Que exemplo de confiança em Deus Jesus deu em Mateus 6?",
    opcoes: ["Os lírios do campo", "Os montes", "O mar da Galileia", "Os anjos"],
    correta: 0
  },
  {
    pergunta: "Quem não entrará no Reino dos céus segundo Mateus 5:20?",
    opcoes: ["Quem não exceder a justiça dos escribas e fariseus", "Os pobres", "As crianças", "Os estrangeiros"],
    correta: 0
  },
  {
    pergunta: "O que Jesus disse sobre juramentos?",
    opcoes: ["Não jurar de maneira alguma", "Jurar somente em Jerusalém", "Jurar somente no sábado", "Jurar em nome dos profetas"],
    correta: 0
  },
  {
    pergunta: "O que devemos fazer quando oramos, segundo Jesus?",
    opcoes: ["Entrar no quarto e orar em secreto", "Gritar na praça", "Orar diante dos reis", "Acender uma vela"],
    correta: 0
  },
  {
    pergunta: "Qual é a recompensa dos limpos de coração?",
    opcoes: ["Serão saciados", "Verão a Deus", "Possuirão a terra", "Serão chamados filhos de Deus"],
    correta: 1
  },
  {
    pergunta: "Quem herdará a terra?",
    opcoes: ["Os ricos", "Os mansos", "Os guerreiros", "Os reis"],
    correta: 1
  },
  {
    pergunta: "O que Jesus disse sobre perseguirem os discípulos?",
    opcoes: ["Regozijai-vos, porque grande é o vosso galardão nos céus", "Fujam sempre", "Resistam com armas", "Abandonem a fé"],
    correta: 0
  },
  {
    pergunta: "O que acontece se o sal perder o sabor?",
    opcoes: ["Nada", "Para nada mais presta senão para ser lançado fora", "Fica doce", "Vira ouro"],
    correta: 1
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
  perguntasEmbaralhadas = [...perguntas];
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

  tempoFinal = Date.now();
  const tempoGastoFormatado = "CANCELADA";
  nomeUsuario = nomeUsuario || localStorage.getItem("nomeUsuario") || "Sem Nome";

  const dados = {
    Nome: nomeUsuario,
    Acertos: 0,
    TempoGasto: tempoGastoFormatado,
    LinkPDF: "Prova cancelada"
  };

  fetch("https://api.sheetmonkey.io/form/3m1vGSyKv9idvhSJwAdzVp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  }).finally(() => {
    document.getElementById("modal-cancelamento").classList.remove("hidden");
  });
}

function recarregarPagina() {
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });

    const linkDiv = document.getElementById("link-pdf");
    linkDiv.innerHTML = `<p><strong>Download do PDF com suas respostas:</strong></p>`;

    const a = document.createElement("a");
    a.style.color = "blue";
    a.style.textDecoration = "underline";

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
      a.href = pdfURL;           // pdfURL já é dataURL
      a.target = "_blank";       // abrir em nova aba
      a.innerText = "Clique aqui para abrir o PDF no iOS";
    } else {
      a.href = pdfURL;           // pdfURL é objectURL normal
      a.download = `${nomeUsuario}-respostas.pdf`;
      a.innerText = "Clique aqui para baixar o PDF";
    }

    linkDiv.appendChild(a);
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
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isIOS) {
      const reader = new FileReader();
      reader.onload = function(e) {
        callback(e.target.result);
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      callback(url);
    }
  });
}