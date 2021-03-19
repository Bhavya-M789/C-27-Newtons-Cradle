class Bob { 
    constructor(x, y, radius){
        var options = {
            restitution: 1.3, 
            friction: 4, 
            density: 1.2, 
        }
        this.radius = radius; 
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position;
        push ();
        translate (pose.x, pose.y);
        ellipseMode (CENTER);
        fill(255);
        ellipse (0, 0, this.radius, this.radius);
        pop ();
    }
}
