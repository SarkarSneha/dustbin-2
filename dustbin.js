class Dustbin{
  constructor(x,y,width,height){
            var options={ 
               isStatic:true

        }
  
       this.bodya=Bodies.rectangle(x,y,width,height,options)
       this.width=width
        this.height=height  
        this.image=loadImage("images/dustbingreen.png")
        World.add(world,this.bodya);
        this.bodyb=Bodies.rectangle((x-(width/2)),(y-(height*2)),height,width,options)
        World.add(world,this.bodyb);
        this.bodyc=Bodies.rectangle((x+(width/2)),(y-(height*2)),height,width,options)
        World.add(world,this.bodyc);
       
          
    }
    display(){
        fill("white")
        imageMode(CENTER)
image(this.image,this.bodya.position.x,this.bodya.position.y,215,250) 
    rect((this.bodyb.position.x-(this.width/2)),(this.bodyb.position.y=430),this.height,90)
   rect((this.bodyc.position.x+(this.width/2)),(this.bodyc.position.y=430),this.height,90)
}
}