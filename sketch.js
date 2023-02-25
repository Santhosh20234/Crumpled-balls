
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var arrowImg
var ball;
function preload(){

	arrowImg = loadImg("RightArrow.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	arrowImg = createImg("RightArrow.png")
	arrowImg.position ()


	ball_options={
		restitution: 0.3
		}

	ball = Bodies.circle(100, 100, 10, ball_options)
    World.add(world, ball)
	
	ground = new Ground(400, 690, 800, 20)
    left_wall = new Ground(700, 650, 10, 100)
    right_wall = new Ground(400, 650, 10, 100)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 10)
  drawSprites();
 ground.show()
 left_wall.show()
 right_wall.show()
}


function hForce(){

Matter.Bodies.applyForce(ball, {x:0, y:0}, {x:0.05, y:0})

}


