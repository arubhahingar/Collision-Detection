var mr,fr;

function setup() {
  createCanvas(800,400);

  mr = createSprite(200, 200, 50, 30);
  fr = createSprite(400, 200, 40, 80);

  mr.velocityX = 3;

  mr.shapeColor = "green";
  fr.shapeColor = "green";

  mr.debug = true;
  fr.debug = true;
}

function draw() {
  background("lightgreen"); 
 // mr.x = mouseX;
 // mr.y = mouseY; 
  var dist_left = fr.x - mr.x;
  var dist_right = mr.x - fr.x;

  var dist_up = fr.y - mr.y;
  var dist_down = mr.y - fr.y;

  var width_dist = mr.width/2 + fr.width/2;
  var height_dist = mr.height/2 + fr.height/2;

  text(dist_left, 100,100);
  text(dist_right, 100,130);
  text(width_dist, 100,150);
  
  if(dist_left <= width_dist && dist_right <= width_dist && dist_up <= height_dist && dist_down <= height_dist){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
    mr.velocityX = -1*mr.velocityX;
  } 
  else {
    mr.shapeColor = "green";
    fr.shapeColor = "green";
  }

  drawSprites();
}