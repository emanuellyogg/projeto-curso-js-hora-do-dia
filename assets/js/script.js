window.onload = function () { //assim que a página carregar, chamar a função 
  analisar();
};

function analisar() {
  let agora = new Date();
  let hora = agora.getHours();
  let min = agora.getMinutes();

  show(`Agora são ${hora}:${min}`);

  if (hora >= 6 && hora < 12) {
    cenario('manha.jpg', 'rgb(155, 224, 207)');
    return;
  }
  if (hora >= 12 && hora < 18) {
    cenario('tarde.jpg', 'rgb(247, 159, 77)');
    return;
  }
  if (hora >= 18 && hora < 24) {
    cenario('noite.jpg', 'rgb(63, 13, 87)');
    return;
  }
  cenario('madrugada.jpg', 'rgb(22, 8, 61)');
}

function cenario(imagem, fundo) {
  let img = document.querySelector('img#imagem');
  img.src = 'assets/img/' + imagem;
  document.body.style.background = fundo;
}

function show(message) { // função show para mostrar mensagem, sem que haja necessidade de criar várias funções para exibir mensagem.
  let exibirhora = document.querySelector('h2#exibir');
  exibirhora.innerHTML = message;
}