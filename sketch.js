var hr,mn,sc;
var hrAngle, mnAngle, scAngle; 


function preload() {
  bg = loadImage("bg.jpg")
}

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
 
}

function draw() {
  background(bg);


  fill("black")
  textSize(15);
  text("12", 192,95);
  text("1", 255,110);
  text("2", 295,150);
  text("3", 310,205);
  text("4", 292,262);
  text("5", 252,300);
  text("6", 195,318);
  text("7", 140,303);
  text("8", 95,265);
  text("9", 82,206);
  text("10", 90,147);
  text("11", 135,105);

  //calculating time using predefined function
  hr=hour();
 mn=minute();
 sc=second();
 //translation and rotation
 translate(200,200)
    rotate(-90)
    //to create iterative rotation
  scAngle=map(sc,0,60,0,360) ; 
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)
  //drawing seconds hand
  push();
    rotate(scAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,100,0);
 pop();
 //drawing mins hand
 push();
 rotate(mnAngle);
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,75,0);
 pop()


console.log(mouseX,mouseY);



 //drawing hr hand
 push();
 rotate(hrAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,50,0);
 pop()

 stroke(255,0,255);
 point(0,0)

 //drawing the arcs
 strokeWeight(10);
 noFill();
 //Seconds
 stroke(255,0,0);
 arc(0,0,300,300,0,scAngle);
 //Minutes
 stroke(0,255,0);
 arc(0,0,280,280,0,mnAngle);
 //Hour
 stroke(0,0,255);
 arc(0,0,260,260,0,hrAngle);
  drawSprites();


}