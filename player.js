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
  this.walkCycle = 0;
  let stop;
  
  this.animateLeft = function(){
    this.img = this.walkLeft[this.walkCycle];
    this.walkCycle += 1;
    //the number 2 is because I have a 3 picture walk cycle
    if(this.walkCycle>2){
      this.walkCycle = 0;
    }
  } 
  //this function will move the player
  this.update = function () {
    if (keyIsDown(this.l)) {
      //this is the left arrow
      this.x -= this.speed;
      
    }
  }; //end update

  //this function displays the image onto the canvas
  this.display = function () {
    //fill(this.col);
    //rect(this.x, this.y, this.w, this.h);
    this.img.resize(this.w, this.h);
    image(this.img, this.x, this.y);
  }; //end display
} //end Player
