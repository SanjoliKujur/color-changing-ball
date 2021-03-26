
var music;
var base1, base2, base3, base4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
     createCanvas(600,600);

    //create 4 different surfaces
    base1 = createSprite(80,580,120,20);
    base1.shapeColor = "green";
    base2 = createSprite(220,580,120,20);
    base2.shapeColor = "blue";
    base3 = createSprite(360,580,120,20);
    base3.shapeColor = "purple";
    base4 = createSprite(500,580,120,20);
    base4.shapeColor = "red";
    ball= createSprite(300,300,30,30);
    ball.shapeColor = "pink";

    //create box sprite and give velocity

}

function draw() {
    background(0);
    ball.x = World.mouseX;
    ball.y = World.mouseY;
    //create edgeSprite
    if (isTouching(base1)){
        ball.shapeColor = "green";
       music.play();
    } else{
        ball.shapeColor = "pink";
       
    }
    if (isTouching(base2)){
        ball.shapeColor = "blue";
       music.stop();
    } else{
        ball.shapeColor = "pink";
       
    }
    
    if (isTouching(base3)){
        ball.shapeColor = "purple";
       music.play();
    } else{
        ball.shapeColor = "pink";
       
    }
    
    if (isTouching(base4)){
        ball.shapeColor = "red";
       music.stop();
    } else{
        ball.shapeColor = "pink";
       
    }
    
    
    


    //add condition to check if box touching surface and make it box
    drawSprites();
}
function isTouching(item) {
    if (ball.x - item.x < item.width/2 + ball.width/2 
        && item.x - ball.x < item.width/2 + ball.width/2
        && ball.y - item.y < item.height/2 + ball.height/2 
        && item.y - ball.y < item.height/2 + ball.height/2) {
            return true
        } else {
            return false
        }
    }