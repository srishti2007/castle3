class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, 10 , options);
    this.body.x=x;
    this.body.y=y;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill("yellow");
    ellipse(0, 0, 50, 50);
    pop();
  }
};

class Pillars {
  constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 50, 200, options);
    this.body.x=x;
    this.body.y=y;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill("violet");
    rect(0, 0, 50, 200);
    pop();
  }
};
class main {
  constructor(x, y) {
    var options = {
    isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 100, 150, options);
    this.body.x=x;
    this.body.y=y;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill("blue");
    rect(0, 0, 100, 150);
    pop();
  }
};
class Bricks {
  constructor(x, y) {
    var options = {
    isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 100, 100, options);
    this.body.x=x;
    this.body.y=y;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang =this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill("turquoise");
    rect(0, 0, 100, 100);
    pop();
  }
};


