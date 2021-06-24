class Shooter {
    constructor(x,y, width, height,angle){
        var options = {
            isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2
            
        }
        this.x=x;
        this.y=y;
        this.width= width;
        this.height = height;
        this.angle = angle;

        this.image = loadImage("images/shooter.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body)
     
    }

    display(){
        var pos = this.body.position;
        if(keyIsDown(LEFT_ARROW)){
            this.body.position.x = this.body.position.x-20;
            }
            if(keyIsDown(RIGHT_ARROW)){
              this.body.position.x = this.body.position.x+20;  
            }
            if(keyIsDown(UP_ARROW)){
               this.body.angle +=0.2;
    
              }

              if(keyIsDown(DOWN_ARROW)){
                this.body.angle -=0.2;
     
               }


               push();
               translate(pos.x,pos.y);
               rotate(this.body.angle);
               pop();

      // pos.x = mouseX;
      // pos.y = mouseY;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
