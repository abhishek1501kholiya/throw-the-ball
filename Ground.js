class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true,
        'restitution':0,
        'density':0.8,
        'friction':0.4
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
   
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
};