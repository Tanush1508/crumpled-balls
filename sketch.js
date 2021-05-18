var ball;
var line1,line2,line3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball=createSprite(100,550,100,100);

	line1=createSprite(width/2,600,200,20);
	line1.shapeColor = color("red");
	
	line2=createSprite(300,560,20,100);
	line2.shapeColor = color("red");

	line3=createSprite(500,560,20,100);
	line3.shapeColor = color("red");

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("space")){
	  ball.x=400;
	  ball.y=530;
  }
  
  drawSprites();
 
}



