var Engine=Matter.Engine,
World=Matter.world,
Events=Matter.events,
Bodies=Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=200;
var score=0;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;

for(var i = 50;i<=width;i=i+50){
  plinkos.push(new Plinko(i,375))
}

for(var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,10))
}

for(var j=75;j<=width;j=j+75){
  plinkos.push(new Plinko(j,275))
}

for(var l=50;l<=width;l=l+50){
  plinkos.push(new Plinko(l,175))
}

for(var m=75;m<=width;m=m+75){
  plinkos.push(new Plinko(m,75))
}
  

ground=new Ground (width/2,height,width,20);


}


function draw() {
  background(255,255,255);  
  drawSprites();
}



