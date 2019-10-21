var posX, posY;
var speedX, speedY;


function setup(){
createCanvas(880,660);
posY = 2;
speedY = 50;
background(255);
}


function draw(){
for (let i = 0; i < 300 ; i ++){
noStroke();
fill(random(0, 255));
circle(random(width),posY, 50);
posY += speedY; 
}

if(posY>height == true){ 

  posY=0;
}


noStroke();
fill(255,30);

rect(0,0,width,height);

}
