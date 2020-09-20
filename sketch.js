function preload(){
}



function setup() {
//Canvas
  createCanvas(windowWidth,windowHeight);
  background('lightgrey');
  angleMode(DEGREES);

//Allert
  push()
    fill('white');
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 500, 300, 10);
  pop()

  push()
    fill('grey');
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2-150, 500, 25, 10, 10, 0, 0);
  pop()

//Menu dots
  push()
    fill('red');
    noStroke();
    ellipseMode(CENTER);
    ellipse(width/2-230, height/2-150, 10);
  pop()

  push()
    fill('yellow');
    noStroke();
    ellipseMode(CENTER);
    ellipse(width/2-210, height/2-150, 10);
  pop()

  push()
    fill('lightgreen');
    noStroke();
    ellipseMode(CENTER);
    ellipse(width/2-190, height/2-150, 10);
  pop()

//Text
  push()
    textAlign(CENTER);
    textSize(15);
    fill('grey');
    text('buffering', width/2, height/2+85);
  pop()
}



function draw() {
//Circle
  if(frameCount < 360/4) {
    push()
      strokeWeight(0);
      stroke(lerpColor (color('red'), color('blue'), frameCount/360*4)); //color gradient
      fill(lerpColor (color('red'), color('blue'), frameCount/360*4));

      translate(width/2, height/2); //center allign
      rotate(frameCount*4);
      translate(30, 0);
      arc(0, 0, 25, 25, 0, 180);
    pop()
  }

//No circle
  if(frameCount > 360/4) {
      push()
        strokeWeight(0.5);
        stroke('white');
        fill('white');

        translate(width/2, height/2);
        rotate(frameCount*4);
        translate(30, 0);
        arc(0, 0, 25, 25, 0, 180);

        if(frameCount == 720/4) {frameCount=0}; //loop
      pop()
    }

}
