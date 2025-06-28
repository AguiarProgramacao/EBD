# 🧠 Quiz com Modo Foco e Envio para Planilha

Este projeto é um sistema de **questionário online com timer regressivo, modo foco (fullscreen), leitura de perguntas via voz, registro de respostas e envio automático para uma planilha Google via [SheetMonkey](https://sheetmonkey.io/)**.

## 🚀 Funcionalidades

- ✅ Cadastro do nome do participante
- ⏱️ Contagem regressiva de 1 hora para realização do quiz
- 🎯 Embaralhamento das perguntas
- 🔒 Modo foco (tela cheia obrigatória)
- 📤 Cancelamento automático caso o participante saia da tela
- 🗣️ Leitura das perguntas por voz (usando `speechSynthesis` ou `responsiveVoice`)
- 📊 Envio automático dos resultados e respostas para uma planilha
- 📌 Modal de alerta personalizado (sem usar `alert()`, evitando quebra do foco)
- 📃 Armazena: nome, tempo, número de acertos e respostas (certa e marcada)

## 🖼️ Captura de Tela

<img src="./screenshot.png" alt="Tela do quiz" width="600"/>

## 📁 Estrutura do Projeto

.
├── index.html
├── style.css
├── script.js
└── README.md

## 📝 Como usar

1. Clone ou baixe este repositório.
2. Edite o arquivo `script.js` e substitua o array `perguntas` com suas perguntas e respostas.
3. No HTML, certifique-se de ter o formulário com o ID `nome`.
4. Configure seu link do SheetMonkey na função `enviarParaPlanilha()`:
   ```js
   fetch("https://api.sheetmonkey.io/form/SEU_FORM_ID", { ... });
Abra o arquivo index.html em um navegador.

## 📦 Dependências
SheetMonkey para salvar os resultados.

speechSynthesis (nativo do navegador) ou responsiveVoice para leitura em voz.

## ✏️ Como adicionar perguntas
No seu script.js, defina o array perguntas assim:

const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correta: 2
  },
  ...
];
## 📌 Observações
A prova é automaticamente cancelada caso o usuário perca o foco da janela (ex: minimiza, troca de aba).

O botão OK do modal mantém o modo tela cheia e não cancela a prova.

O resultado é exibido ao final com base no desempenho.

## 📋 Licença
Este projeto é de uso livre para fins educacionais, acadêmicos e profissionais.