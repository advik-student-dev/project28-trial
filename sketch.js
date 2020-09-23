const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree;
var mango1;
var stoneObject;
var constraint;
var ground;

function preload() {

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	stoneObject = new stoneClass(300, 400, 50);
	constraint = new constraintClass(stoneObject.body, { x: 300, y: 400 });
	tree = new treeClass(950, 310, 400, 590);
	mango1 = new mangoClass(850, 240, 50);
	ground = new groundClass(600, 590, width, 20);



	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(225);
	tree.display();
	mango1.display();
	stoneObject.display();
	constraint.display();
	ground.display();
	detectCollision(stoneObject, mango1);

}

function mouseDragged() {
	Matter.Body.setPosition(stoneObject.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
	constraint.fly()
}

function keyPressed() {
	if (keyCode === 32) {
		constraint.attach(stoneObject.body);
	}
}


function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}

}




