class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        //loaded images
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    // to attach a body back to the sling.
    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        //added images for catapult.
        image(this.sling1,200,20);
        image(this.sling2,170,20);
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //color of the line
            stroke(48,22,8);
            //to make the rubber band thinner if birds's on the left side of sling.
            if(pointA.x < 220){
                //thickness of the line
                strokeWeight(3); 
                //rubber band between the bird and the left sling. 
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+10);
                //rubber band between the bird and the right sling.
                line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+10);
                //added image for the support behind the bird.
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            
            // to make the rubber band thicker if birds's on the left side of sling.
            else{
            strokeWeight(7); 
            line(pointA.x-25, pointA.y, pointB.x-20, pointB.y+10);
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y+10);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            }
            pop();
        }
            


    }
    
}