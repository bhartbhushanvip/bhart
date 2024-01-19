var x=0;
var y=0
var rad=200;
var rad2=250;
var a=0
function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log(width)
  console.log(height)
  stroke(255);
  background(20);
}
function draw() {
  //background(20);
  x=rad*sin(a);
  y=rad2*cos(a/4);
  //rotate(a)
  translate(width/2,height/2)
  rotate(a)
  for(var i=0;i<20;i++){
  var r=map(sin(frameCount*i),-1,1,0,255);
  var g=map(sin(frameCount/i),-1,1,0,255);
  var b=map(sin(frameCount*i*i),-1,1,100,255);
  push();
  stroke(r,g,b)
  noFill()
  strokeWeight(map(sin(a),-1,1,3,25))
  point(x,y);
  pop()
  }
a+=0.009;
}
