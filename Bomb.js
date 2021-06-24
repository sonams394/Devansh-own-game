class Bomb {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.r = 30;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("images/bullet.png");
      World.add(world, this.body);
    }

    shoot()
    {
 
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setVelocity(this.body, {x:0, y: -30});
    }

    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      //var index = floor(this.speed % this.animation.length);
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop();

    }
  }