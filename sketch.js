var bullet, wall, speed, weight, damage, thickness;



function setup() {
  createCanvas(1600,400);
  //background.shapeColor = color(0,0,0);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,10);
 // bullet.shapeColor = "blue";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(255,255,255);
  bullet.velocityX = speed;

}

function draw() {
  background(0);  
  drawSprites();

  if (hasCollided(wall,bullet)){
      damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
       bullet.velocityX = 0;
      if (damage<10){
        wall.shapeColor = color(0,255,0);
      }
   
      if (damage>10){
        wall.shapeColor = color(255,0,0);
      }
    }
  }
    function hasCollided(ob1,ob2){
       if (ob1.x-ob2.x<ob2.width/2+ob1.width/2 && 
        ob2.x-ob1.x<ob2.width/2+ob1.width/2){

          return true;
        }
               
            

    
}


























