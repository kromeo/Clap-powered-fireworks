// this code is adapted from the YouTube Coding train tutorial 27: fireworks! by Dan Shiffman
// https://www.youtube.com/watch?v=CKeyIbT3vXI&index=30&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH

//creates function called firework which will control the animation
function Firework() {
  this.hu = random(150, 10);
  this.firework = new Particle(random(width), height, this.hu, true);
  this.exploded = false;
  this.particles = [];

  //when the animation is completely finished, clear the canvas:
  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;

  }
}
//when the volume is high enough (0.3), create 100 particles and start exploding animation!
  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
var vol = mic.getLevel();
      if (vol >0.3) {
        this.exploded = true;
        this.explode();
      }
    }
// make them fall back down when animation is complete
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

// create 100 new particles when the clap is heard.
  this.explode = function() {
    for (var i = 0; i < 100; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}
