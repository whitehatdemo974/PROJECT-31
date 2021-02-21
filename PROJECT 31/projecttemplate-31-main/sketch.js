const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rainDrops;
var umbrella;
var bg;

function preload(){
    
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
   
    
}

function draw(){
    drawSprites();
}   

