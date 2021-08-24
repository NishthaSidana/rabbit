var garden,rabbit;
var gardenImg,rabbitImg;
var round
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  redImg=loadImage("redImage.png")
  orangeImg=loadImage("orangeLeaf.png")
  appleImg=loadImage("apple.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
  
// Moving background
garden=createSprite(600,350);
garden.addImage(gardenImg);
garden.scale=4
//creating boy running
rabbit = createSprite(450,700);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
 

function draw() {
  background("green");
  redCreate()
  edges=createEdgeSprites()
  orangeCreate()
  appleCreate()
  drawSprites();
  rabbit.x=mouseX;
  rabbit.collide(edges)
}
function redCreate(){
if (frameCount%30==0){
  red = createSprite(400,200);
  red.addImage(redImg);
  red.scale =0.03;
  red.velocityY=12
  red.x=Math.round(random(20,1000))
  red.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
}
}
function orangeCreate(){
  if (frameCount%30==0){
    orange = createSprite(400,200);
    orange.addImage(orangeImg);
    orange.scale =0.05;
    orange.velocityY=12
    orange.x=Math.round(random(20,1000))
    orange.depth=rabbit.depth
    rabbit.depth=rabbit.depth+1
  }
}
function appleCreate(){
  if (frameCount%30==0){
    apple= createSprite(400,200);
    apple.addImage(appleImg);
    apple.scale =0.05;
    apple.velocityY=10
    apple.x=Math.round(random(20,1000))
    apple.depth=rabbit.depth
    rabbit.depth=rabbit.depth+1
  }
}