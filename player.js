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
  this.walkCycle = 0;
  this.animateRight = function(){
    if(frameCount % 10 == 0){
       this.img = this.walkRight[this.walkCycle];
        this.walkCycle = (this.walkCycle+1) % 3;
    }
  } 
  this.animateLeft = function(){
   
    if(frameCount % 10 == 0){
       this.img = this.walkLeft[this.walkCycle];
        this.walkCycle = (this.walkCycle+1) % 3;
    }
  } 
  //this function will move the player
  this.update = function () {
    if (keyIsDown(this.l)) {
      //this is the left arrow
      this.x -= this.speed;
      this.animateLeft();
    } //end update
    if (keyIsDown(this.r)) {
      //this is the left arrow
      this.x += this.speed;
      this.animateRight();
    } //end update
  }

  //this function displays the image onto the canvas
  this.display = function () {
    //fill(this.col);
    //rect(this.x, this.y, this.w, this.h);
    this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y);
  }; //end display
} //end Player
