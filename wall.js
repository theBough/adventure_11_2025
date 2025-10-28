function Wall(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  
  this.display = function(){
    fill(this.col)
    rect(this.x, this.y, this.w, this.h);
  }
}//end wall

function roomOne(){
  w=[];
  w.push(new Wall(0,225,400,20,"#4CAF50"))
  w.push(new Wall(0,0,200,200,"#4CAF50"))
  w.push(new Wall(380,0,20,200,"#4CAF50"))
  
}
