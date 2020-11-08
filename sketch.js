var zenia, torus, cyclap, wall;

function setup() {
  createCanvas(600,600);

  speed=random(55,90);
  weight=random(400,1500)

  zenia = createSprite(400, 200, 50, 50);
  zenia.shapeColour =(225);
  zenia.velocityX = 2;

  torus = createSprite(300, 200, 50, 50);
  torus.shapeColour =(225);
  torus.velocityX = 2;

  cyclap = createSprite(200, 200, 50, 50);
  cyclap.shapeColour =(225);
  cyclap.velocityX = 2;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColour =(80,80,80);
  
}

function draw(car) {
  background(0,255,150);  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
  }
  var deformation=0.5 * weight * speed/22509;
  if(deformation>180){
  car.shapeColour(255,0,0)
  } 

  if(deformation<180 && deformation<100){
    car.shapeColour(230,230,0)
  }
  
  if(deformation<100){
    car.shapeColour(0,250,0)
  }

  drawSprites();
}