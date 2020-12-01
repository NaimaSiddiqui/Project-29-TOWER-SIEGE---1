const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var world,engine
var ground,stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

var box21,box22,box23,box24,box25,box26;
var sling,polygon,polygonImage;
var launchingForce=100;

function preload(){
  polygonImage= loadImage("polygon.png");
}
function setup() {
  createCanvas(800,800);

  engine= Engine.create();
  world=engine.world;
  Engine.run(engine);

  ground= new Ground(400,700,800,20)
  stand1=new Stand(220,495,250,20);
  stand2=new Stand(465,363,250,20);

  fill("yellow")
  box1=new Box(140,430,40,40);
  box2=new Box(180,430,40,40);
  box3=new Box(220,430,40,40);
  box4=new Box(260,430,40,40);
  box5=new Box(300,430,40,40);
  
  box6=new Box(160,390,40,40);
  box7=new Box(200,390,40,40);
  box8=new Box(240,390,40,40);
  box9=new Box(280,390,40,40);

  box10=new Box(180,350,40,40);
  box11=new Box(220,350,40,40);
  box12=new Box(260,350,40,40);

  box13=new Box(200,310,40,40);
  box14=new Box(240,310,40,40);

  box21=new Box(400,300,50,50);
  box22=new Box(450,300,50,50);
  box23=new Box(500,300,50,50);

  box24=new Box(425,250,50,50);
  box25=new Box(475,250,50,50);

  box26=new Box(450,200,50,50);

polygon= Bodies.circle(28,409,10,{isStatic: false,friction: 1,density: 1.2,});
World.add(world,polygon)
 sling= new SlingShot(this.polygon,{x:45,y:400});
 Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background(0);  
  
ground.display();
stand1.display();
stand2.display();

fill("skyblue");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();

fill("pink")
box6.display();
box7.display();
box8.display();
box9.display();

fill("lightgreen")
box10.display();
box11.display();
box12.display();

fill("turquoise");
box13.display();
box14.display();

fill("gold");
box21.display();
box22.display();
box23.display();

fill("silver");
box24.display();
box25.display();

fill("turquoise");
box26.display();




sling.display();
image(polygonImage,polygon.position.x,polygon.position.y,30,30);

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x: mouseX,y: mouseY})

}
function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(sling.body,{x:45, y:400})
sling.attach(this.polygon);
}
}