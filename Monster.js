class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("monster1.png");
		this.body=Bodies.circle(x, y, 120, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y);
			//rectMode(CENTER)
			//fill(255,0,255)
			imageMode(CENTER);
			image(this.image,0,0,300,300)
			pop()
			
	}
}
