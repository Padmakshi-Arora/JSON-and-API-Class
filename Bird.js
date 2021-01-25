class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //created an empty trajectory array
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX
    //this.body.position.y = mouseY
    //this array will store birds updated x and y position

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);
    }
  
    
    for (var i=0;i<this.trajectory.length;i++){
      image(this.smokeImage,this.trajectory[i][0], this.trajectory[i][1]);
    }
    super.display();
  }
}
