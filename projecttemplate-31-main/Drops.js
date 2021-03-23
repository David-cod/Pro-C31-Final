class Drops {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
       // this.r=radius;
        this.body=Bodies.circle(x,y,5,options);
        this.r=5;
        World.add(world,this.body);
        

    }
    drops(){
       // for(var i=0;i=400;i=i++){
           // new Drops(random(0,400),random(0,400), 5,5)
            //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y,this.r,this.r);
       // pop();
     //}
         

    }
    reposition(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})

        }
    

    }
}