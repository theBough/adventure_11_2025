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

function roomChange(){
  if(p.x + p.w < 0 ){
    //the player has gone past the left edge of the canvas
    //put the player on the right side
    p.x= width;
  }
}//end roomChange


