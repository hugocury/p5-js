function preload() {
  imagemcenario = loadImage('imagens/cenario/floresta4.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagempersonagem = loadImage('imagens/personagem/correndo.png');
  imageminimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png')
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTelaIncial = loadFont('imagens/assets/fonteTelaInicial.otf')
  fita = loadJSON('fita/fita.json')
  
  //somDoJogo = loadSound('sons/trilha_jogo.mp3');
  //somDoPulo = loadSound('sons/somPulo.mp3');
}