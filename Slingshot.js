class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 1

        }
        this.pointB = pointB;
        this.bodyA= bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
		this.sling.bodyA=body;
	}

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("turquoise");
            strokeWeight(4);
            line(pointA.x+10, pointA.y+10, pointB.x, pointB.y);
        }
    }
    
}
