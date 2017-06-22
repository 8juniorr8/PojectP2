var y = 800;
var x = -10;
function setup(){
  createCanvas(windowWidth,windowHeight);
  background('#349DAD');
  noStroke();
  frameRate(30);
  textSize(30);
  textAlign(CENTER);
}


function draw (){
  /*background('#349DAD');*/
  y = y - 0.1;
/*  if (y < 0) {
    y = height;

  }*/

  x = x + width/900;
/*  if (x > width) {
    x = 0;
  }*/

  rect(x, y, 10, 1000);
  ellipse(width/2,height/2,80,80);
  text(frameCount, width/2, height/2);


  if(frameCount > 899) {

    noLoop();

    }

}
