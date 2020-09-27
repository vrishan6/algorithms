var mrect, frect;
var mrect1;
var frect2,frect3,frect4;
function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 150, 50);
  mrect1 = createSprite(510, 200, 50, 150);
  frect = createSprite(200, 200, 100, 50);
  frect2 = createSprite(100, 200, 50, 100);
  frect3 = createSprite(300, 200, 10, 100);
  frect4 = createSprite(400, 200, 100, 50);
  mrect1.velocityX = -1;
  mrect1.velocityY = 0;
}

function draw() {
  background("lightgreen"); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
 if(isTouching(mrect,frect3)){
  frect3.shapeColor = "blue"
 }else{
 frect3.shapeColor = "grey"
 }
 if(isTouching(mrect,frect)){
  frect.shapeColor = "yellow"
 }else{
 frect.shapeColor = "grey"
 }
 if(isTouching(mrect,frect2)){
  frect2.shapeColor = "purple"
 }else{
 frect2.shapeColor = "grey"
 }
 if(isTouching(mrect,frect4)){
  frect4.shapeColor = "red"
 }else{
 frect4.shapeColor = "grey"
 }

 bounce(mrect1,frect4);

  
  drawSprites();
}
