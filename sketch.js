//variables
var trex, trex_running;
var edges;
var ground,ground_img;



//basics
function preload() {
//load media files

  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_img=loadImage("ground2.png");
}

function setup () {
  //creates elements for site

  //creating canvas
  createCanvas(1800,600);

  // creating t rex
  trex=createSprite(70,550,20,50);
  trex.addAnimation("running",trex_running);

  //creating edges
  edges=createEdgeSprites();

  //creating ground
  ground=createSprite(900,560,1800,20);
  ground.addImage("ground",ground_img);
}

function draw() {
//main content of site.

  //backgrouhnd greation
  background("yellow");

  //ADDING JUMP CAPACITY
  if(keyDown("space")) {
    trex.velocityY=-10;
  }
//applying gravity
  trex.velocityY=trex.velocityY+0.5;

  trex.collide(ground);

  //adding ground movement
  ground.velocityX=-10;
  console.log(ground.x);

  if(ground.x<0) {
    ground.x=ground.width/4;
  }


  //drawing sprites
  drawSprites();
}
