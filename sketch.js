const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var b1, b2, b3, b4,b5,b6,b7,b8,b9,b10;
var ball;
var crane;
var bg, hitting;

function preload () {
bg=loadImage("sprites/background.png");
hitting=loadSound("sounds/hit.mp3");
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,height,1600,40);
    b1=new Building(900,100,70,70);
    b2=new Building(900,100,70,70);
    b3=new Building(900,100,70,70);
    b4=new Building(900,100,70,70);
    b5=new Building(900,100,70,70);

    b6=new Building(600,100,70,70);
    b7=new Building(600,100,70,70);
    b8=new Building(600,100,70,70);
    b9=new Building(600,100,70,70);
    b10=new Building(600,100,70,70);

    ball= new Ball(200,300,40);

   crane=new Crane(ball.body,{x:300,y:340});

}


function draw(){

        background(bg);
    
    
    Engine.update(engine);
        ground.display();
        b1.display();
        b2.display();
        b3.display();
        b4.display();
        b5.display();


        b6.display();
        b7.display();
        b8.display();
        b9.display();
        b10.display();

        ball.display();

        crane.display();

}

function mouseDragged(){
   // if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
      hitting.play();
    
}


