
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball=Bodies.circle(200,100,20,{
		restitution:0.3,
		friction:0.5,
		density:1.2
	});
	World.add(world, ball);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	boxPos = 1200;
	boxY = 640;
	

	boxbase=createSprite(boxPos+100,boxY+40,200,20);
	boxbase.shapeColor="red";

	boxbasebody = Bodies.rectangle(boxPos+100, boxY+45, 200, 20, {isStatic:true});
	World.add(world, boxbasebody);

	leftbox=createSprite(boxPos,boxY,20,100);
	leftbox.shapeColor="red";
	
	leftboxbody= Bodies.rectangle(boxPos, boxY, 20, 100, {isStatic:true});
	World.add(world, leftboxbody)

	rightbox=createSprite(boxPos+200,boxY,20,100);
	rightbox.shapeColor="red";
	
	rightboxbody= Bodies.rectangle(boxPos+200, boxY, 20, 100, {isStatic:true});
	World.add(world, rightboxbody)


	

	Engine.run(engine);
  
  
}





function draw() {
  rectMode(CENTER);
  background(0);
  fill("red");
ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
 
}

function keyPressed(){
	Matter.Body.applyForce(ball,ball.postion,{
		x:100,
		y:-85
	});

}



