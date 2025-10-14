let p; 

function setup() {
  createCanvas(400, 400);
   p =new Player(200,200,50,50,"red","Screenshot 2025-09-10 113007.png")
}

function draw() {
  background(220);
  p.display()
}
