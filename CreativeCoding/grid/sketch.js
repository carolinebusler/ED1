function setup() { //runs one time
createCanvas(720, 720);
background(0,0, 200); //navy blue
}

function draw() {//loop
fill(0,200,255);//light blue
strokeWeight(20);//stroke 20 pixels
translate(60,60);// shifts down + right 60 pixels
quad (0,0,
      300, 0,
      300, 300,
      0, 300);
quad (300,0,
      600, 0,
      600, 300,
      300, 300); //square in upper right corner
quad (0,300,
      300, 300,
      300, 600,
      0, 600);
quad (300,300,
      600, 300,
      600, 600,
      300, 600);
}
