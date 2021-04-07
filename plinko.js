class plinko{
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0,
            isStatic:true,
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,width,this.r,options);
        World.add(world, this.body);


    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        imageMode(CENTER);
        noStroke(0);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}