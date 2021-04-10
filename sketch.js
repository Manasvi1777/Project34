const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var box = [];
var ground2;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,500,200);
  rope = new Rope(hero.body, { x: 550, y: 50 });
  monster = new Monster(1100,300,300);

  for (var i=0;i<6;i++)
	{
		box[i]=new Box(780+50, 300, 50,50);
	}
  for (var i=7;i<13;i++)
	{
		box[i]=new Box(830+50, 300, 50,50);
	}

  ground2=new Ground(1100,500,100,10);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  ground2.display();

  hero.display();
  
  monster.display();

  for (var i=0;i<6;i++)
	{
		box[i].display();
  }
  for (var i=7;i<13;i++)
	{
		box[i].display();
	}
}
function mouseDragged() {
	
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}