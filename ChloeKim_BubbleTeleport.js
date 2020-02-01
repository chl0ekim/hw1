var x;
var y;
var radius;

function setup() {
  createCanvas(600, 500);
  // changed the size of the canvas for practice
  x = random(width);
  y = random(height);
  radius = 150;
  // changed the size from 50 to 150
}

function draw() {
 x = mouseX;
  y= mouseY;
  // follows my mouse cursor
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(255, 200, 200, 200);
  }
  else {
    fill(255, 255, 50, 200);
    // changed green, blue, and alpha 
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 1);
  y += random(-1, 1);
}
