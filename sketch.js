
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paperObject,groundObject
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)



	engine = Engine.create();
	world = engine.world;
	dustbinObj = new Dustbin(1200,650);
	paperObject = new Paper(200,450,40);
	groundObject = new Ground(width / 2,670,width,20)
   // create a ground

   var render = Render.create({
	   element: document.body,
	   engine: engine,
	   options: {
		width: 1200,
		height: 700,
		wireFrames: false




     }
     })

  

   Engine.run(engine);
//Render.run(render);
 
	
	

}

