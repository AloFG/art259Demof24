function setup() {
  createCanvas(400, 400);
  canvas.parent("project");
}

function draw() {
  ellipse(mouseX, mouseY, 25);
}

// function draw() {
//   background(0);

//   lollipop(200, 200, 100, 150,);
//   lollipop(400, 100, 250, 300);
//   lollipop(50, 100, 50, 100);
// }

// function lollipop(x, y, lolliDiameter, stickLength,){
//   fill(0, 200, 255);
//   rect(x-10, y, 20, stickLength);

//   fill(255, 0, 200);
//   ellipse(x, y, lolliDiameter, lolliDiameter);
// }