const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var monsters = [];
var maxMonster=5;
var bombs = [];
var bomb;


function preload(){

}


function setup() {
  engine = Engine.create();
  world = engine.world;

  engine.world.gravity.y = 1;

  createCanvas(windowWidth,windowHeight);

 
shooter = new Shooter(windowWidth/2, windowHeight-80,100,100,90)
bomb = new Bomb(shooter.x, shooter.y);


  
 if(frameCount % 1500 === 0){
  var y = 10;

  for(var i=0; i<maxMonster; i++){
    monsters.push(new createMonster(random(0,windowWidth), y));
       y= y + 100;
      //console.log(blocks);
  }
  
}

//Matter.Body.setStatic(balldemo.body,true);
}

function draw() {
  Engine.update(engine);
  background("skyblue");
  


  for(var i = 0; i<maxMonster; i++){
    monsters[i].showMonster();
    monsters[i].updateY();
    
}
 
bomb.display();
 shooter.display();
 
 for(var i =0; i<bombs.length; i++)
 {
   showBombs(bombs[i],i);

   for(var j =0; j<monsters.length; j++)
   {
     if(bombs[i] !== undefined && monsters[j]!== undefined)
     {
       var collision = Matter.SAT.collides(bombs[i].body, monsters[j].body);
       if(collision.collided)
       {
         monsters[j].remove(j);
         Matter.World.remove(world, bombs[i].body);
         bombs.splice(i,1);
         i--;
       }
     }
   }
 }

 
  drawSprites();
}

function keyPressed()
{

 /* if(keyCode === 65)
  {
    console.log("I am working");
  bomb.shoot();
  }*/

  if(keyCode === 32)
  {
   var bomb = new Bomb(shooter.x, shooter.y);
   bombs.push(bomb);
  }
}

function keyReleased()
{
  if(keyCode === 32)
  {
   bombs[bombs.length - 1].shoot();
  }
}

function showBombs(bomb,index)
{
  bomb.display();

  if(bomb.body.position.y<=0)
  {
    Matter.World.remove(world,bomb.body);
    bombs.splice(index,1)
  }
}


