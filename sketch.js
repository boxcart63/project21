
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, flor
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ellipseMode(CENTER)

	//Create the Bodies Here.
	flor=Bodies.rectangle(400,700,800,50,{isStatic:true})
	ball= Bodies.circle(200,0,15,{isStatic:false,restitution:0.3,friction:0,density:1.2})
	World.add(world,ball)
	World.add(world,flor)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update
  ellipse(ball.position.x,ball.position.y,15)
  rect(flor.position.x,flor.position.y,800,50)
  drawSprites();
 
}



