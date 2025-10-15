function Player(x,y,w,h,col,img){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = loadImage(img);
  
  //this function will move the player
  this.update = function(){
    if(keyIsDown(37)){
      //this is the left arrow
      this.x -= 5;
    }
  }//end update
  
  //this function displays the image onto the canvas
  this.display = function(){
    //fill(this.col);
    //rect(this.x, this.y, this.w, this.h);
    this.img.resize(this.w, this.h)
    image(this.img,this.x,this.y)
  }//end display
  
}//end Player
