


function isTouching(bill, tom){ //parameters
    if (bill.x - tom.x < tom.width/2 + bill.width/2
      && tom.x - bill.x < tom.width/2 + bill.width/2
      && bill.y - tom.y < tom.height/2 + bill.height/2
      && tom.y - bill.y < tom.height/2 + bill.height/2) {
        return true; //true
    }
    else {
        return false; //false
    }
}

function bounce(bill, tom){

  if (bill.x - tom.x < tom.width/2 + bill.width/2
  && tom.x - bill.x < tom.width/2 + bill.width/2) {
      
      bill.velocityX = bill.velocityX * (-1);
      tom.velocityX = tom.velocityX * (-1);     
  }

  if (bill.y - tom.y < tom.height/2 + bill.height/2
    && tom.y - bill.y < tom.height/2 + bill.height/2) {
      
      bill.velocityY = bill.velocityY * (-1);
      tom.velocityY = tom.velocityY * (-1)
      
  }

  
}