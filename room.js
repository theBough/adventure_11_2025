function loadRooms(){
  rooms = [
    [roomOne, roomTwo]
  ]
}
function roomOne(){
  w=[];
  w.push(new Wall(0,225,400,20,"#4CAF50"))
  w.push(new Wall(0,0,200,200,"#4CAF50"))
  w.push(new Wall(380,0,20,200,"#4CAF50")) 
}
function roomTwo(){
  w=[];
  w.push(new Wall(0,225,400,20,"#4CAF90"))
}
