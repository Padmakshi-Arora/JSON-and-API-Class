class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    // setting the visiblity property to 255(fully visible).
    this.visiblity = 255;
    
  }

  display(){
    console.log(this.body.speed);
    //to display the pigs only when their speed is less than 3.
    if(this.body.speed < 3){
      //calling display from the Base class.
      super.display();
    }
    else{
      //to remove the pigs.
      World.remove(world,this.body);
      push();
      //reducing the property visiblity by 5 for every frame.
      this.visiblity = this.visiblity - 5;
      //applying tint over the pig images.
      tint(255,this.visiblity);
      // dislaying the pig image.
      image(this.image, this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

    score(){
      if(this.visiblity < 0 && this.visiblity > - 1005){
         score++;
         //score = score +1;
         //score+ = 1;
      }
    }

}