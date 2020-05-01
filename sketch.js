const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box1, box2, box3, box4 ;

var pillar1, pillar2, pillar3, pillar4;

var block;

var ground;

var brick1;

var bigball;

function setup(){

    var canvas = createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

    var groundOptions ={
        isStatic:true
    }

    ground = Bodies.rectangle(200, 570, 1000, 20, groundOptions);
    World.add(world, ground);

    box1 = new Box(205, 300);                      
    box2 = new Box (550, 300);
    box3 = new Box(260, 300);                      
    box4 = new Box (555, 300);

    brick1 = new Bricks (250, 500);
    brick2 = new Bricks (550, 500);

    pillar1 = new Pillars (325,450);
    pillar2 = new Pillars (475, 450);
    pillar3 = new Pillars (175, 450);
    pillar4 = new Pillars (625, 450);
    
    block = new main (400, 475);
  
    bigball = new Box (400, 300);

}

function draw(){

    background(0);
    
    Engine.update(engine);

    rectMode(CENTER);
    fill("white");
    rect(ground.position.x, ground.position.y, 1200, 20);

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    bigball.display();

    pillar1.display();
    pillar2.display();
    pillar3.display();
    pillar4.display();

    block.display();

    brick1.display();
    brick2.display();

}