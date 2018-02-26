//week 3 hw, vii challenge: art-deco.js

function setup() { 
  createCanvas(520, 400);
} 

function draw() { 
  background(255);
  
  stroke('black');
  noFill();
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 5; j++) {
   	 rect(50-i*10-j*-100,200-i*10,20+i*20,20+i*20);
    }
  }
}
