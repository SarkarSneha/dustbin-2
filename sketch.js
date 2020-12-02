
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{

}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	
	


	paper = new Paper();
	dustbin=new Dustbin(720,420,67,10);
	
    ground=new Ground(width/2,550,1200,10);
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background("lightblue")
  paper.display();
  dustbin.display();
ground.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-690});
}
}



