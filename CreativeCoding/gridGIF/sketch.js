//customize # of squares in grid

let gif;
function preload(){
  gif = loadImage('assets/blueTrianglesREAL.gif');
}


function setup() { //runs one time
createCanvas(windowWidth, windowWidth);
background(0,0, 200); //navy blue
}

function draw() {//loop
fill(0,200,255);//light blue
strokeWeight(1);//stroke 20 pixels

var num = 2; //# squares in grid
var sideLen = windowWidth/num; //side length

translate (-150, -150);//gives bleed effect

for (var y=0; y<2 * windowWidth; y=y+sideLen){//builds columns
for (var x=0; x< 2 *windowWidth; x=x+sideLen){//builds row
image (gif, x,y, windowWidth/num, windowWidth/num);
}
}

}

function windowResized(){ //resizes and refreshes
  resizeCanvas (windowWidth, windowHeight);
}
