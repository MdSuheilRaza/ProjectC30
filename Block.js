class Block extends parentClass {
  
  constructor(x, y){
    super(x,y,50,50);
  }

  display(){
    console.log("height")
    if(this.body.speed<3){
      push()
      super.display();
      pop()
     }
     

     else{
       World.remove(world,this.body);

       push()
       this.visiblity=this.visiblity-5;
       tint(255,this.visiblity);
       pop()
     }
  }

};