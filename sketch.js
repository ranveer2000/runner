var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin;
var seconds;
var random1 = [];
var random2 = [];
var coinImg;
var score;
var bomb;
var bombImg;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png")
  bombImg = loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

coin=createSprite(10000,-30);
coin.addImage(coinImg);
coin.scale = 0.5;

bomb = createSprite(10000,10000);
    bomb.addImage(bombImg);
    bomb.scale = 0.1;

score = 0;

random1 = [90,205,320]

random2 = [90,205,320]

leftBoundary=createSprite(0,0,55,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,55,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);

  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();

  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  coin.velocityY = 4;

if(path.y > 400 ){
path.y = height/2;
}
spawnBombs()
spawnCoins()
collectCoin()
bombBlast()

  drawSprites();
  fill("white");
  text('Score:'+score,50,10);
}
function spawnCoins(){
  if(frameCount % 100 === 0){
    coin = createSprite(500,-100);
    coin.addImage(coinImg);
    coin.scale = 0.4;
    coin.position.x = random(random1)
    coin.velocityY = 4;
  }
 
}

function collectCoin(){
  if (boy.isTouching(coin)){
    coin.remove();
    score += 10;
  }
}

function spawnBombs(){
  if(frameCount % 160 === 0){
    bomb = createSprite(500,-100);
    bomb.addImage(bombImg);
    bomb.scale = 0.1;
    bomb.position.x = random(random2);
    bomb.velocityY = 4;
  }
 
}
function bombBlast(){
  if(boy.isTouching(bomb)){
    bomb.remove();
    score=0;
  }
}
