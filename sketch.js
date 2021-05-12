
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var Cpaper,ground;
var CpaperI;
var wall;
function preload()
{


}

function setup() {
	createCanvas(1600, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Cpaper=new PaperClass(150,870,70);
	ground = new Ground(400,950,1600,20);
	box1=new Dustbin(750,850,20,150);
	box2=new Dustbin(950,850,20,150);
	box3 = new Dustbin(850,920,220,20);
	wall = new Ground(1200,500,20,920);

	World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");
    
  box1.display();
  box2.display();
  box3.display();
  wall.display();
  Cpaper.display();
  ground.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(Cpaper.body,Cpaper.body.position,{x:1900,y:-1100});
	}
}

