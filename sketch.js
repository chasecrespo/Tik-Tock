function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  //fill ("green");
  text ("The Clock",150,20);
  
  var hr=hour();
  var mn=minute();
  var sec=second();

  translate (200,200);
  rotate (-90);
  strokeWeight(8);
  stroke("blue")
  noFill();
  var s=map(sec,0,60,0,360);
  arc (0,0,300,300,0,s);

  push ();
  rotate (s);
  strokeWeight(7);
  stroke("blue");
  line (0,0,100,0);
  pop ();

  strokeWeight(8);
  stroke("yellow")
  noFill();
  var m=map(mn,0,60,0,360);
  arc (0,0,280,280,0,m);

  push ();
  rotate (m);
  strokeWeight(7);
  stroke("yellow");
  line (0,0,75,0);
  pop ();

  strokeWeight(8);
  stroke("red")
  noFill()
  var h=map(hr%12,0,12,0,360);
  arc (0,0,260,260,0,h);

  push ();
  rotate (h);
  strokeWeight(7);
  stroke("red");
  line (0,0,50,0);
  pop ();

  push ();
  stroke("white");
  point (0,0);
  pop ();



 
}