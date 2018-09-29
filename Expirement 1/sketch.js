var mic;
var fireworks = [];
var gravity;

function setup() {
  createCanvas(700, 600);
  mic = new p5.AudioIn();
  mic.start();
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  var vol = mic.getLevel();

// create new random fireworks
  if (random(1) < 0.01) {
    fireworks.push(new Firework());
}

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  // sound bar
  fill (0, 255,0);
  var y = map(vol, 0, 1, height, 0);
  rect (width-50, y, 50, height- y);
}
