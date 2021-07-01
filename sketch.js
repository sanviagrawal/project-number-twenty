var wall1;
var wall2;
var wedge1;
var wedge2;
var wedge3;
var angle1=60;
var angle2=60;
var angle3=60;
var ball1;
var ball2;

 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	var opts={
		isStatic:true,
	}

var opts1={
	restitution:0.4,
	friction:0.2,
}
	//Create the Bodies Here.
	wall1=Bodies.rectangle(100,250,100,20,opts);
	wall2=Bodies.rectangle(300,250,100,20,opts)
	wedge1=Bodies.rectangle(200,150,80,20,opts)
	wedge2=Bodies.rectangle(200,150,80,20,opts)
	wedge3=Bodies.rectangle(200,150,80,20,opts)
	ball1=Bodies.circle(220,10,10,opts1)
	ball2=Bodies.circle(230,10,10,opts1)
World.add(world,wedge1);
World.add(world,wall1);
World.add(world,wall2);
World.add(world,wedge2)
World.add(world,wedge3)
World.add(world,ball1);
World.add(world,ball2);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  rectMode(CENTER);
  rect(wall1.position.x,wall1.position.y,100,20)
  rect(wall2.position.x,wall2.position.y,100,20)

  Matter.Body.rotate(wedge1,angle1);
  push ()
  translate(wedge1.position.x,wedge1.position.y);
  rotate(angle1);
  rect(0,0,80,20);
  pop()
  angle1+=0.2;

  Matter.Body.rotate(wedge2,angle2);
  push ()
  translate(wedge2.position.x,wedge2.position.y);
  rotate(angle2);
  rect(0,0,80,20);
  pop()
  angle2+=0.6;

  Matter.Body.rotate(wedge3,angle3);
  push ()
  translate(wedge3.position.x,wedge3.position.y);
  rotate(angle3);
  rect(0,0,80,20);
  pop()
  angle3+=0.9;
  
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  
  

  drawSprites();
 
}



