
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var ground1, bob1, rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600, 138, 500, 75);
	bob1 = new Bob(450, 488, 100, 100);
	bob2 = new Bob(550, 488, 100, 100);
	bob3 = new Bob(650, 488, 100, 100);
	bob4 = new Bob(750, 488, 100, 100);
	bob5 = new Bob(850, 488, 100, 100);
	rope1 = new Rope(ground1.body, bob1.body, -200, 0);
	rope2 = new Rope(ground1.body, bob2.body, -100, 0);
	rope3 = new Rope(ground1.body, bob3.body, 0, 0);
	rope4 = new Rope(ground1.body, bob4.body, 100, 0);
	rope5 = new Rope(ground1.body, bob5.body, 200,  0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Salmon");
  ground1.display();
  rope1.display();
  bob1.display();
  rope2.display();
  bob2.display();
  rope3.display();
  bob3.display();
  rope4.display();
  bob4.display();
  rope5.display();
  bob5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode  === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-250, y: -160});
	}
}



