//Global Variables
var monkey , monkey_running;
//var ground, invisibleGround, groundImage;
var ObstaclesGroup , ObstaclesGroup_img , ObstaclesGroup1 , ObstaclesGroup1_img;
var ground , back_img , back;

function preload(){

  monkey_running =     loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
   
   ObstaclesGroup_img = loadImage("stone.png");
  ObstaclesGroup1_img = loadImage("Banana.png");
  back_img = loadImage("jungle.jpg");  
                                 
}


function setup() {
  createCanvas(600,500);
  
  monkey = createSprite(50,170,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,350,20,50);
  ground.velocityX =-4;
  monkey.collide(ground);
  
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  back = createSprite(500,200);
  back.addAnimation("background",back_img);
   back.x = back.width/2;
}


function draw(){
 background(255);
 
 camera.x = monkey.x;

  
  back.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  
  if(keyDown("space")) {
      monkey.velocityY = -10;
    }

    monkey.velocityY = monkey.velocityY + 0.8

  if (back.x < 0){
      back.x = back.width/2;
    }
  
   drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(camera.x + width/2,165,10,40);
    obstacle.velocityX = -6;
    //obstacle.velocityX = - (6 + 3*count/100);
    ObstaclesGroup.addImage(ObstaclesGroup_img);
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
    ObstaclesGroup.add(obstacle);
  }
  if(frameCount % 60 === 0){  
    var obstacle1 = createSprite(camera.x + width/2,300);
    obstacle1.velocityX = -6;
    //obstacle1.velocityX = - (6 + 3*count/100);
    ObstaclesGroup1.addImage(ObstaclesGroup1_img);
    obstacle1.scale = 0.05;
     ObstaclesGroup1.add(obstacle1);
  }
}