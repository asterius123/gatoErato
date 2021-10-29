/*
Crie as variáveis para:
- a imagem de fundo
- o sprite do Tom
- a animação do Tom dormindo
- a animação do Tom correndo
- a animação do Tom ao fim
- o sprite do Jerry
- a animação Jerry parado
- a animação do Jerry chamando
- a animação do Jerry ao fim
*/
var jerryChamando ,jerryParado ,jerryFim;
var tomDormindo ,tomCorrendo ,tomFim;
var tomSprite ,jerrySprite;
var fundotela;

function preload() {
    /*
    Carregue, usando loadAnimation():
    - imagem de fundo "imagens/garden.png"
    - animação gato1: cat1.png
    - animação gato 2: cat2 e cat3
    - animação gato 4: cat4
    - animação rato1: mouse1
    - animação rato2: mouse2 e mouse3
    - animação rato3: mouse4
    **não esquecer de colocar caminho pra imagem ("pasta/nomedaimagem.png")
    */
    jerrySprite = loadAnimation("imagens/mouse1.png");
    jerryChamando = loadAnimation("imagens/mouse2.png","imagens/mouse3.png");
    jerryFim = loadAnimation("imagens/mouse4.png");
    tomSprite = loadAnimation("imagens/cat1.png");
    tomCorrendo =loadAnimation("imagens/cat2.png","imagens/cat3.png");
    tomFim = loadAnimation("imagens/cat4.png");
    fundotela = loadImage("imagens/garden.png");
}


function setup() {
    canvas = createCanvas(1000, 800);
    
    jerry = createSprite(200, 700);
    tom = createSprite(700, 700);
    //crie os sprites de Tom e Jerry e adicione as animações aqui
  //para adicionar animações use sprite.addAnimation();
    tom.addAnimation("deitado", tomSprite);
    tom.scale=0.15
    tom.addAnimation("movendo", tomCorrendo);
    tom.addAnimation("tfim", tomFim);
    jerry.addAnimation("parado", jerrySprite);
    jerry.scale=0.1;
    jerry.addAnimation("chamando", jerryChamando);
    jerry.addAnimation("jfim", jerryFim);
    //jerry.debug=true
    //tom.debug=true
    jerry.setCollider("circle",0,0,1200);
    tom.setCollider("circle",0,0,1300);
    
}

function draw() {
//coloque a imagem de fundo aqui
    background(fundotela);
    
    
/*
Ao fim do código, quando acabar o function draw(), escreva uma função para quando a seta para a esquerda for apertada. 
Execute a função criada dentro de function draw()
*/

  //se o Tom e o Jerry colidirem, pare os sprites e mude suas animações para as animações do fim
  if(jerry.x  - tom.x < tom.width/2 + jerry.width/2 && tom.x - jerry.x < tom.width/2 + jerry.width/2){
     tom.velocityX=0;
     tom.changeAnimation("tfim",tomFim);
     jerry.changeAnimation("jfim",jerryFim);
     }
    
    drawSprites();
}

//escreva a função seta pressionada aqui
function keyPressed() {
  
  //if(keyCode === LEFT_ARROW){}
    if(keyCode === LEFT_ARROW){
      tom.changeAnimation("movendo",tomCorrendo);
      tom.velocityX = -3
      jerry.changeAnimation("chamando", jerryChamando);
    }

    // se a seta para a esquerda for pressionada, faça o Tom ir para a esquerda e mude as animações do Tom e do Jerry
}

//para mudar animações use sprite.changeAnimation()