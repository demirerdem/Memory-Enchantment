class Buttonlar{
    constructor(_buttonX,_buttonY,_buttonString,_modAyarla){
        this.buttonX=_buttonX;
        this.buttonY=_buttonY;
        this.buttonString=_buttonString;
        this.modAyarla=_modAyarla;
    }
    clicked(fareX,fareY,kartSec){  //
      let d = dist(fareX,fareY,this.buttonX,this.buttonY);
      if(d<60){
        mode=this.modAyarla;       
        if (this.modAyarla != 0 ){          //mod 0 olunca kart oluşmasına gerek yokki (yani geri don butonu çalıştırıldığında)
          kartOlustur(kartSec);
        }
      }
    }
  ///////////////////////////////////////////buttonları gösterme fonks.
    buttonGoster(){    
      push();      
      drawingContext.shadowOffsetX = 5;
      drawingContext.shadowOffsetY = -5;
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = 'navy';
      noStroke()
      strokeWeight(2)
      
      fill(114,60,128)  
      textSize(100)
      textFont('Chiller')
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(this.buttonString,this.buttonX,this.buttonY);
      strokeWeight(3)

      pop();
    }
}