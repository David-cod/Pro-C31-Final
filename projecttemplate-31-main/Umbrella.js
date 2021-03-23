class Umbrella{
    constructor(x, y) {
        var options = {
            //'restitution':0.8,
            //'friction':1.0,
            //'density':1.0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 50, options);
       // this.width = width;
        //this.height = height;
        this.radius=50;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y+70, 300,300);
        //pop();
      }
}