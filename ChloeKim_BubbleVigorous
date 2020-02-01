var x;
var y;
var radius;

function setup() {
  createCanvas(600, 500);
  // changed the size of the canvas for practice
  x = random(width);
  y = random(height);
  radius = 150;
}

function draw() {
  background(255);

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(255, 200, 200, 200);
  }
  else {
    fill(255, 220, 200, 200);
  }

  ellipse(x, y, radius * 2);
  x += random(-1, 2);
  y += random(-2, 1);
  // changed both x and y to make the motion vigorous 
}
