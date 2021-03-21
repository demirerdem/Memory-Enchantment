class Alev{                        //arkaplan alevinin classı
  constructor(_tempX, _tempY, _tempR,_renk) {
    this.x = _tempX;
    this.y = _tempY;
    this.renk = _renk;
    this.yaricap = _tempR;
    this.color= color(255) ;
    let r = random(3);


    if (this.renk=='mavi'){   //arkaplandaki mavi renk
      if(r < 1){
        this.color = color(27,34,102,120);    //kapali mavi
       } else if(r >= 1 && r < 2 ){
         this.color = color(47,100, 166, 120);  //mavi
       } else if(r >= 2 ){
        this.color = color(6, 255, 247,120); //açık mavi
      } 
    } 
  }
  
  show() {                  //alevleri gösterme fonksiyonu
    push();
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.yaricap);
    pop();
    this.yaricap-=1;
  }

  sagUstHareketi(x1,x2,y1,y2) {         //alevleri sağ üste götürme
    push()
    frameRate(60)
    this.x += random(x1,x2);
    this.y -= random(y1,y2);
    pop()
  }
}

///////////////////////////////////////////////5 tane array açtığım için 5 fonksiyon açıp yerlerini tek tek belirlemem gerekiyor
function maviAlevOlustur1(x,y)  {//işaret parmağı
  let radius = random(40,50);
  let c = new Alev(x,y,radius,'mavi');
  maviAlevArray1.push(c);
  for(let i = maviAlevArray1.length-1; i>= 0; i--){
    maviAlevArray1[i].sagUstHareketi(2,0,1,5);
    maviAlevArray1[i].show();    
    if(maviAlevArray1[i].yaricap <= 0 ){ //şeklin çemberlerinin yarıçapları 0'dan küçük olunca diziden sil    
    maviAlevArray1.splice(i, 1);
    } 
  }
}
function maviAlevOlustur2(x,y){  //orta parmak
  let radius = random(40,50);
  let c = new Alev(x,y,radius,'mavi');
  maviAlevArray2.push(c);
  for(let i = maviAlevArray2.length-1; i>= 0; i--){
    maviAlevArray2[i].sagUstHareketi(2,1,1,5);
    maviAlevArray2[i].show();    
    if(maviAlevArray2[i].yaricap <= 0 ){ //şeklin çemberlerinin yarıçapları 0'dan küçük olunca diziden sil    
    maviAlevArray2.splice(i, 1);
    } 
  }
}
function maviAlevOlustur3(x,y){ //yüzük parmak
  let radius = random(40,50);
  let c = new Alev(x,y,radius,'mavi');
  maviAlevArray3.push(c);
  for(let i = maviAlevArray3.length-1; i>= 0; i--){
    maviAlevArray3[i].sagUstHareketi(2,4,1,5);
    maviAlevArray3[i].show();    
    if(maviAlevArray3[i].yaricap <= 0 ){ //şeklin çemberlerinin yarıçapları 0'dan küçük olunca diziden sil    
    maviAlevArray3.splice(i, 1);
    } 
  }
}
function maviAlevOlustur4(x,y){     //serçe parmak
  let radius = random(40,50);
  let c = new Alev(x,y,radius,'mavi');
  maviAlevArray4.push(c);
  for(let i = maviAlevArray4.length-1; i>= 0; i--){
    maviAlevArray4[i].sagUstHareketi(2,3,1,5);
    maviAlevArray4[i].show();    
    if(maviAlevArray4[i].yaricap <= 0 ){ //şeklin çemberlerinin yarıçapları 0'dan küçük olunca diziden sil    
    maviAlevArray4.splice(i, 1);
    } 
  }
}
function maviAlevOlustur5(x,y){   //başparmak
  let radius = random(40,50);
  let c = new Alev(x,y,radius,'mavi');
  maviAlevArray5.push(c);
  for(let i = maviAlevArray5.length-1; i>= 0; i--){
    maviAlevArray5[i].sagUstHareketi(2,4,1,8);
    maviAlevArray5[i].show();    
    if(maviAlevArray5[i].yaricap <= 0 ){ //şeklin çemberlerinin yarıçapları 0'dan küçük olunca diziden sil    
    maviAlevArray5.splice(i, 1);
    } 
  }
}