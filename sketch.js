var ground1;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var opts={
		isStatic:true
	}
	var opts1={
		isStatic:false,
		restitution:0.4,
		friction:0.2,
		density:1.2,
	}
	ground1=Bodies.rectangle(300,480,600,20,opts)
	ball=Bodies.circle(100,470,10,opts1)
World.add(world,ground1)
World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground1.position.x,ground1.position.y,600,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10)
  
  drawSprites();
 
}
function KeyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:20.60,y:20.05});
		Matter.Body.setStatic(ball,false)

	}

}


