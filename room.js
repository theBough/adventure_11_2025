let bgRoomOne;
function loadRooms(){
  rooms = [
    [roomOne, roomTwo],
    [roomThree]
  ]
  bgRoomOne = loadImage("images/backgrounds/megamanBackground.png")
}
function roomOne(){
  w=[];
  w.push(new Wall(0,225,width,20,"purple"))
  w.push(new Wall(0,0,width / 2,200,"#4CAF50"))
  w.push(new Wall(380,0,20,200,"#4CAF50")) 
  bgRoomOne.resize(width, height);
  image(bgRoomOne, 0,0)
}
function roomTwo(){
  w=[];
  w.push(new Wall(0,225,400,20,"#4CAF90"))
}

function roomThree(){
  w=[];
  w.push(new Wall(0,225,400,20,"black"))
  w.push(new Wall(250,175,20,75,"pink"))
}
