const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisons=[];
var divisionHeight=300;


function setup() {
var canvas =   createCanvas(480,800);


engine = Engine.create();
    world = engine.world;


  ground1 = new ground(240,780,500,20);
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40;j<=width;j=j+50)
  {
    plinkos.push(new plinko(j,75));
  }
  for(var j = 40;j<=width;j=j+50)
  {
    plinkos.push(new plinko(j,175));
  }
  for(var j = 40;j<=width;j=j+50)
  {
    plinkos.push(new plinko(j,275));
  }
  for(var j = 40;j<=width;j=j+50)
  {
    plinkos.push(new plinko(j,375));
  }

  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);  

  drawSprites();
    
  ground1.display();
 

  if(frameCount%90===0){
    particles.push(new particle(random(width/2-30,width/2+30),10,10));
  }
  for (var j=0;j<particles.length; j++){
    particles[j].display();
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for (var p=0;p<particles.length; p++){
    plinkos[p].display();
  }

}
