function Player(x,y,w,h,col,img,l,r,u,d,speed){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = col;
  this.img = loadImage(img);
  this.l = l;
  this.r = r;
  this.u = u;
  this.d = d;
  this.speed = speed
  
  //this function will move the player
  this.update = function(){
    if(keyIsDown(this.l)){
      //this is the left arrow
      this.x -= this.speed;
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
