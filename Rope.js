class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX 
        this.offsetY = offsetY
        var options = {
            bodyA : body1, 
            bodyB : body2,     
            pointA:{x : this.offsetX, y : this.offsetY},
            stiffness : 0.04,
            length : 350
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);

        var Anchor1X = pointA.x  + this.offsetX
        var Anchor1Y = pointA.y + this.offsetY

        var Anchor2X = pointB.x 
        var Anchor2Y = pointB.y

        line (Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }
}