class Paper{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
          // friction:70,
            density:1.2
        }

        
      
        this.body = Bodies.circle(200, 378, 60, options);
        this.image=loadImage("images/paper.png")
        this.width=30
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle =this.body.angle;
      
        fill("yellow"); 
        imageMode(RADIUS);
         image(this.image,pos.x,pos.y,70, 70);
        
      }
    }
