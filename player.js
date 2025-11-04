function Player(x, y, w, h, col, img, l, r, u, d, speed) {
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
  this.speed = speed;
  this.walkLeft = [
    loadImage("images/playerOne/ltOne.png"),
    loadImage("images/playerOne/ltTwo.png"),
    loadImage("images/playerOne/ltThree.png")    
  ]
   this.walkRight = [
    loadImage("images/playerOne/rtOne.png"),
    loadImage("images/playerOne/rtTwo_.png"),
    loadImage("images/playerOne/rtThree_.png")    
  ]
  this.walkUp = [
    loadImage("images/playerOne/climbOne.png"),
    loadImage("images/playerOne/climbTwo.png")    
  ]
  this.walkCycle = 0;
  this.standLeft = loadImage("images/playerOne/standLeft.png")
  this.standRight = loadImage("images/playerOne/standRight.png")
  this.direction = "right"
  //**********************************************************************
  this.rest = function(){
    if(this.direction == "left"){
      this.img = this.standLeft;
    }else{
      this.img = this.standRight;
    }
  }  
  this.animateRight = function(){
    if(frameCount % 10 == 0){
        this.walkCycle = (this.walkCycle+1) % this.walkRight.length;
       this.img = this.walkRight[this.walkCycle];
      
    }
  } 
  this.animateLeft = function(){
   
    if(frameCount % 10 == 0){
        this.walkCycle = (this.walkCycle+1) % this.walkLeft.length;
       this.img = this.walkLeft[this.walkCycle];
      
    }
  } 
  this.animateUp = function(){
   
    if(frameCount % 10 == 0){
        this.walkCycle = (this.walkCycle+1) % this.walkUp.length;
       this.img = this.walkUp[this.walkCycle];
      
    }
  } 
  //this function will move the player
  this.update = function () {
    if (keyIsDown(this.l)) {
      //this is the left arrow
      this.x -= this.speed;
      this.direction = "left"
      this.animateLeft();
    }else if (keyIsDown(this.r)) {
      //this is the left arrow
      this.x += this.speed;
      this.direction = "right"
      this.animateRight();
    } else if (keyIsDown(this.u)) {
      //this is the left arrow
      this.y -= this.speed;
      this.direction = "left"
      this.animateUp();
    }else{
      this.rest();
    }
    roomChange()
    wallCollision()
  }//end update

  //this function displays the image onto the canvas
  this.display = function () {
    //fill(this.col);
    //rect(this.x, this.y, this.w, this.h);
    this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y);
  }; //end display
} //end Player
