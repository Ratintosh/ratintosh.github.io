let particles = []

/* Initialize particle object */
class Particle {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.alpha = 1;
        this.color = color;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;

      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.rect(this.x, this.y, this.radius, this.radius);
      ctx.fill();

        /* Restore the recent canvas context*/
        ctx.restore();
    }
    update() {
        this.draw();
        this.alpha -= 0.01;
        this.x += this.dx;
        this.y += this.dy;
    }
}

/* Particle explosion function */
function explode() {

    /* Clears the given pixels in the rectangle */
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, i) => {
        if (particle.alpha <= 0) {
            particles.splice(i, 1);
        } else particle.update()
    })

    /* Performs a animation after request*/
    drawPlayerOne();
    drawPlayerTwo();
    requestAnimationFrame(explode);
}

function startExplosion(color, posx, posy){
  /* Timer is set for particle push 
      execution in intervals*/
  setTimeout(() => {
      for (i = 0; i <= 150; i++) {
          let dx = (Math.random() - 0.5) * (Math.random() * 6);
          let dy = (Math.random() - 0.5) * (Math.random() * 6);
          let radius = Math.random() * 3;
          let particle = new Particle(posx, posy, radius, dx, dy, color);
  
          /* Adds new items like particle*/
          particles.push(particle);
      }
      explode();
  }, 10);
}