let p;
let w = [];
let rooms =[];
let activeRow, activeColumn;

function setup() {
  createCanvas(400, 400);
  p = new Player(200, 200, 20, 20, "red", "player.png", 37, 39, 38, 40, 1);
  loadRooms();
  activeRow = 0;
  activeColumn = 0;
}

function draw() {
  background(220);
  noStroke();
  
  p.update();
  
   rooms[activeRow][activeColumn].call();
  for(i=0 ; i < w.length ; i++){
    w[i].display()
  }//end loop
  p.display();
}


