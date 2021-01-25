const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling";
var bg = "sprites/bg.png";
var score = 0;

function preload() {
   getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:40});
}

function draw(){

 if(backgroundImg)
    background(backgroundImg);
    textSize(35);
    fill("white");
    noStroke();
    text("Score :" + score,width-300,50);

    Engine.update(engine);
    
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();  
    
}

//to drag the bird as the point is dragged with the mouse.
function mouseDragged(){

    if(gameState !== "launched" ){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }

   
}

//to release the bird from the sling.
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

// to attach the bird back to the sling.
function keyPressed(){
    //32 is the ASCII value for space.
    //ASCII- American Standard Code for Information Interchange 
    if(keyCode === 32){
     //slingshot.attach(bird.body);
  }

}

async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour >= 06 && hour <= 19){
        bg = "sprites/bg.png";
    }

    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}






