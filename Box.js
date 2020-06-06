class Box {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
             'restitution':0,
             'density':1.2,
             'friction':0.5
          }
         
        this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
      this.height = height;
      this.image = loadImage("sprites/dustbingreen.png");
        World.add(world,this.body);
       // this.x = x;
       // this.y = y;
       
    

    }
    show (){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
    translate(pos.x, pos.y);
    rotate(angle);
  imageMode(CENTER);
  image(this.image,-10,-40,100,100);
   // rectMode(CENTER);
 //   strokeWeight(4);
  //  stroke("green");
  
  //  fill(255);
  //  rect(0, 0, this.width, this.height);
    pop();
    }
}
    




