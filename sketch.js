const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
//var boxes = [];
var engine;
var world;
var ground1;
var circle1;
var slingshot;
//var rectimg;






var  rect2  ;
function prelaod(){
//rectimg = loadImage("dustbingreen.png");
}
function setup(){
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

//rect1 = new Box(330,360,10,50);
rect2 = new Box(360,385,50,10);
//rect3 = new Box(390,360,10,50);
circle1 = new Ball(200,100,20);


ground1 = new Ground(200,400,400,10);
slingshot = new SlingShot(circle1.body,{x:200,y:100});
World.add(world,ground1);
Engine.run(engine);
}

function draw()
{
	background(255);


	
//	rect1.show();
circle1.show();
	rect2.show();
	//rect3.show();

	ground1.display();
	slingshot.display();
	


	
}
function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingshot.fly();
}
