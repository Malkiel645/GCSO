function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  wall=createSprite(1500,200, 60, height/2 )
  
  car=createSprite(50, 200, 50, 50);
  
  speed=random(55,90);
  
  wieght=random(400,1500)
  
  car.velocityX = 5;
  }
var car, wall;
var speed, wieght;

function draw() {
  background(255,255,255);  
 

  drawSprites();
}