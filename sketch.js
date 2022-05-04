var bgImg;
var cat;
var mouse;
function preload() {
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")

    catImg3=loadAnimation("images/cat4.png")
    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")  
    mouseImg3=loadAnimation("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    mouse=createSprite (150,600);
    mouse.addAnimation("m1",mouseImg1)
    mouse.scale=0.2
   cat=createSprite (850,600);
   cat.addAnimation("catSitting",catImg1)
   cat.scale=0.2
  
//makeCatWalk()



}

function draw() {

    background(bgImg);


    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode===RIGHT_ARROW){
    mouse.addAnimation ("mouseTeasing ", mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25
}
}
function makeCatWalk(){
 
cat.velocityX=-5
cat.addAnimation("catRunning",catImg2)
cat.changeAnimation("catRunning")
}