class Ground {
    //parameter constructor in parantheses >
    constructor(x, y, width, height){ 
        var options = {
            restitution: 0.3, 
            friction: 0.5, 
            density: 1.2, 
            isStatic: true
            }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position
        var angle = this.body.angle
        //push pushes object and once operation is done, it pops out
        push(); 
        translate(pose.x, pose.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
