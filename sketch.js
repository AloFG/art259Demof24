function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("project");
}

function draw() {
  background(100);
  ellipse(mouseX, mouseY, 25);
}