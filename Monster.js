class createMonster{
    constructor(x,y){
        var options = {
            'frictionAir': 0.2    
        }
        this.monster = Bodies.rectangle(x,y,100,100,options)
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/monster.png");   
        
        World.add(world, this.monster);
    }

  updateY(){     
      if(this.monster.position.y > height){

          Matter.Body.setPosition(this.monster, {x:random(0,400), y:10})
      }
  }

  showMonster(){
    this.monster.velocity.y = 0.2;
    this.monster.speed = 0.5;
      imageMode(CENTER);
      image(this.image,this.monster.position.x,this.monster.position.y,this.width,this.height);
  }

  remove(index)
  {
      Matter.World.remove(world,monsters[index].body);
      monsters.splice(index,1);
  }
}

