const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball





function setup() {
  var canvas=createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
options={
  isStatic:true
}

  ground=Bodies.rectangle(200,390,700,10,options);
  World.add(world,ground);
  console.log(ground);

  options_ball = {
    restitution:2
  }
  ball = Bodies.circle(200,100,50,options_ball)
  World.add(world,ball);
}

function draw() {
  background(0);  
Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,700,10);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y, 50);
}