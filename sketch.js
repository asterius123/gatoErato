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
    tomSprite = loadAnimation("imagens/cat1.png");
    fundotela = loadImage("imagens/garden.png");
}


function setup() {
    canvas = createCanvas(1000, 800);
    
    jerry = createSprite(200, 700);
    tom = createSprite(700, 700);
    //crie os sprites de Tom e Jerry e adicione as animações aqui
  //para adicionar animações use sprite.addAnimation();
    

}

function draw() {
//coloque a imagem de fundo aqui
    background(fundotela);
    tom.addAnimation(tomSprite);
/*
Ao fim do código, quando acabar o function draw(), escreva uma função para quando a seta para a esquerda for apertada. 
Execute a função criada dentro de function draw()
*/

  //se o Tom e o Jerry colidirem, pare os sprites e mude suas animações para as animações do fim
    keyPressed()
    drawSprites();
}

//escreva a função seta pressionada aqui
function keyPressed() {
  
  //if(keyCode === LEFT_ARROW){}
    if(keyCode === LEFT_ARROW){
    fantasma.x=fantasma.x-3
      
    }

    // se a seta para a esquerda for pressionada, faça o Tom ir para a esquerda e mude as animações do Tom e do Jerry
}

//para mudar animações use sprite.changeAnimation()