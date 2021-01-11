//Global Variables
var snake, snakeImg;
var bg;
var apple, appleImg;
var knifeSound;
var appleGrp;
var score=0;
var gameState=0;
var wall1, wall2, wall3, wall4;
var gameOver, gameOverImg;
var restart,restartImg;

//Images
function preload(){
    appleImg=loadImage("apple.png");
    bg=loadImage("bg.jpg");
    gameOverImg=loadImage("gameOver.jpg");
    restartImg=loadImage("restart.png");
    knifeSound=loadSound("knifeSound.mp3");
}

function setup(){
 createCanvas(600,600);
 //snake
 snake = createSprite(108,275,40,40);
 snake.setCollider("rectangle",0,0,40,40);
 snake.shapeColor=("#039be5");

 //appleGrp
 appleGrp=new Group();

 //walls
 wall1=createSprite(300,45,520,10);
 wall2=createSprite(300,555,520,10);
 wall3=createSprite(45,300,10,520);
 wall4=createSprite(555,300,10,520);
 wall1.visible=false;
 wall2.visible=false;
 wall3.visible=false;
 wall4.visible=false;

 //gameOver & restart
 gameOver=createSprite(300,280,20,20);
 restart=createSprite(300,500,20,20);
 gameOver.addImage(gameOverImg);        
 restart.addImage(restartImg);
 gameOver.visible=false;
 restart.visible=false;
}

function draw(){
    background(bg);

    //GameState Play
    if(gameState===0){
    //Directions
    if(keyDown(RIGHT_ARROW)){
        snake.x=snake.x+10;
    }
    if(keyDown(UP_ARROW)){
        snake.y=snake.y-10;
    }
    if(keyDown(DOWN_ARROW)){
        snake.y=snake.y+10;
    }
    if(keyDown(LEFT_ARROW)){
        snake.x=snake.x-10;
    }
    if(keyDown(RIGHT_ARROW)||keyDown(LEFT_ARROW)||keyDown(UP_ARROW)||keyDown(DOWN_ARROW)){
        gameState=0;
        console.log(gameState);
    }
        
    spawnApples();

    if(snake.x>555||snake.x<45||snake.y>555||snake.y<45){
        textFont('Georgia');
        fill(0);
        textSize(20);
        text("Game Over",250,200);
        gameState=1;
        console.log("Ha! Game Over"+gameState)
        }
    }

    //GameState End
    if(gameState===1){
        gameOver.visible=true;
        restart.visible=true;
        appleGrp.destroyEach();
        if(mousePressedOver(restart)){
        console.log("Its working.");
        reset();
        }
    }

    textFont('Georgia');
    fill(0);
    textSize(20);       
    text("Score: "+score,480,35);
    text("Snake Game 2.0",240,35);
    eatApples();
    drawSprites();
}

function spawnApples(){
    if(frameCount%150===0 && gameState===0){
        apple = createSprite(350,327,20,20);
        apple.x=Math.round(random(60,540));
        apple.y=Math.round(random(65,540));
        apple.addImage(appleImg);
        apple.scale=0.075;
        appleGrp.add(apple);
        appleGrp.setLifetimeEach(150);
    }
}

function eatApples(){
    if(appleGrp.isTouching(snake)){
    appleGrp.destroyEach();
    score+=1;
    knifeSound.play();
    growSnake();
    }
}

function reset(){
    gameState=0;
    gameOver.visible=false;
    restart.visible=false;
    score=0;
    snake.x=108;
    snake.y=275;
}

function growSnake(){
    if(appleGrp.isTouching(snake)){
        
    }
}