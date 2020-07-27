
var fixedRect, movingRect, bob, jeff;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  bob = createSprite(100, 100, 50, 50);
  jeff = createSprite(200, 100, 50, 50);

  bob.velocityX = 5;
  jeff.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect, jeff)){
    movingRect.shapeColor = "blue";
    jeff.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    jeff.shapeColor = "green";
  }
  
  
  bounce(bob, jeff);
  
  drawSprites();
}
//ball.isTouching(computer);


//return - keyword

/*
ARGUMENTS vs PARAMETERS

Arguments 
-- the real thing
-- exists
-- Function is accepting arguments
-- Passing arguments through a function

Parameters
-- PLACEHOLDERS for arguments
-- no existence
*/