function isTouching(rect1,rect2){

    if (Math.abs(rect1.x - rect2.x) < rect1.width/2 + rect2.width/2
    && Math.abs(rect1.y - rect2.y) < rect1.height/2 + rect2.height/2 ){
      return true
       
  } else{
    return false
  }
   }
  
   function bounce(mrect1,frect){
    if (Math.abs(mrect1.x - frect.x) < mrect1.width/2 + frect.width/2
    && Math.abs(mrect1.y - frect.y) < mrect1.height/2 + frect.height/2 ){
      console.log("entering condition")
      mrect1.velocityX = mrect1.velocityX * -1
      frect.velocityX =  frect.velocityX * -1
  
      mrect1.velocityY = mrect1.velocityY * -1
      frect.velocityY =  frect.velocityY * -1
       
  }
  
   }