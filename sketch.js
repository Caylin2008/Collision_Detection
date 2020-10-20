function setup() {
  createCanvas(1200,800);
  FixedRect=createSprite(200, 200, 50, 80);
  MovingRect=createSprite(400,200,80,50);
  FixedRect.shapeColor="turquoise";
  MovingRect.shapeColor="turquoise";

  FixedRect.debug=true;
  MovingRect.debug=true;
}

function draw() {
  background(0,0,0); 
  MovingRect.x=World.mouseX;
  MovingRect.y=World.mouseY;

  if (MovingRect.x-FixedRect.x < MovingRect.width/2+FixedRect.width/2 && 
    FixedRect.x-MovingRect.x < MovingRect.width/2+FixedRect.width/2 &&
    MovingRect.y-FixedRect.y < MovingRect.height/2+FixedRect.height/2 &&
    FixedRect.y-MovingRect.y < MovingRect.height/2+FixedRect.height/2){
    FixedRect.shapeColor="purple";
  MovingRect.shapeColor="purple";
  }
  else{
    FixedRect.shapeColor="turquoise";
  MovingRect.shapeColor="turquoise";
  }
  




  drawSprites();
}