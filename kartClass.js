class Kartlar{
  constructor(_imageX,_imageY,_imageGenislik,_imageYukseklik){
    this.imageX=_imageX;
    this.imageY=_imageY;
    this.imageGenislik=_imageGenislik;
    this.imageYukseklik=_imageYukseklik; 
    
    this.show=false;
    this.isOut = false;
    this.yanlisGoster = false;

    this.id; 
    this.kartArkasi; 

    this.alpha = 255;
  }
  ///////////////////////////////////////resimlere tıklama fonksiyonu
  clicked(fareX,fareY){
    let d = dist(fareX, fareY, this.imageX,this.imageY);    
      if (d < 100 && !this.isOut && oncekiKart != this){     //resmin ortası ile farenin x,y sinin uzaklığı 100den küçükse 
        this.show=true;
        this.yanlisGoster = false;                          //kare'ye tıklanınca resmi goster                   
        if(oncekiKart!=null)  {        
          if(oncekiKart.id==this.id){                      //önceki kartın id'si ile sonraki sonraki kartın id'si aynıysa resmi goster   
            this.isOut = true;
            oncekiKart.isOut = true;  
            oncekiKart.show = true;   
            oncekiKart.yanlisGoster=false;            
            oyunDurumu();
          }           
          else{                                     //idler aynı değilse resmi kapat ve önceki'kartın id 'sini false yap
            oncekiKart.yanlisGoster=true;
            this.yanlisGoster = true;
          }
          oncekiKart=null;
        }
        else{
          oncekiKart=this;  
        }                  
      }
  }   
     
  kartArkaPlanıGoster(){
    push();
    imageMode(CENTER);
    image(this.kartArkasi,this.imageX, this.imageY, this.imageGenislik, this.imageYukseklik);
    pop();
  }

  resimGoster(){
    push();
    imageMode(CENTER);
    if(this.yanlisGoster && !this.isOut) {
      tint(255,this.alpha);
      this.alpha -= 7;
    }
    fill(0)
    rectMode(CENTER);
    image(this.kartOnYuzu, this.imageX, this.imageY, this.imageGenislik, this.imageYukseklik);
    pop();

    if(this.alpha <= 0){       //2.resme tıklandığında 1 ve 2.resmin yavaş yavaş opaklığının azalması
      if(!this.isOut){
        this.show = false;
      }
      this.yanlisGoster = false;
      this.alpha = 255;
    }
  }
}


let k=0;

/////////////////////////////////////////////////////////////bölüm bittigi zaman gelen ekran
function oyunDurumu(){
  let j = 0;
  
  for (let i = 0;i<kartlarArray.length;i++){
      if( kartlarArray[i].isOut){
      j++;
    }
  } 
  if (j == kartlarArray.length){    //k=1 olunca key pressed çalışssın
    k=1;     
  }
}


/////////////////////////////////////////////////////////////Kartların buttona tıklanıldığında oyunun zorluğuna göre kart oluşturulması
function kartOlustur(kartSayisi){             
  kartlarArray=[];   
  ///////////////////////////////////////////////////her bir bölümdeki kartları tek tek oluşturdum çünkü her modda ayrı ayrı kart gelmesi gerekiyor
  if(kartSayisi==12){
    for(let j = 0; j<kartSayisi/6; j++){                     //kartların arkaplanın oluşturulması
      for(let i = 0; i<6; i++){
        let x = 210*i+370;let y = 210*j+350;let w = 200;let h = 200;
        let kartlarObjesi = new Kartlar(x,y,w,h);
        kartlarArray.push(kartlarObjesi);
        //kartlarArray[i]=kartlarObjesi;
      }
    }
  }
  if(kartSayisi==18){
    for(let j = 0; j<kartSayisi/6; j++){                     //kartların arkaplanın oluşturulması
      for(let i = 0; i<6; i++){
        let x = 210*i+370;let y = 210*j+250;let w = 200;let h = 200;
        let kartlarObjesi = new Kartlar(x,y,w,h);
        kartlarArray.push(kartlarObjesi);
        //kartlarArray[i]=kartlarObjesi;
      }
    }
  }
  if(kartSayisi==24){
    for(let j = 0; j<kartSayisi/6; j++){                     //kartların arkaplanın oluşturulması
      for(let i = 0; i<6; i++){
        let x = 210*i+370;let y = 210*j+150;let w = 200;let h = 200;
        let kartlarObjesi = new Kartlar(x,y,w,h);
        kartlarArray.push(kartlarObjesi);
        //kartlarArray[i]=kartlarObjesi;
      }
    }
  }
  ////////////////////////////////////////////////resimlerin id'sine göre sıralanması
  let resimSayisi = kartSayisi/2;
  let uygunKartlar = [];
  for( let i = 0; i < kartSayisi; i++) {
    uygunKartlar[i] = i;
  }                           
  for( let i = 0; i < resimSayisi; i++){
    let ran1 = int(random(0,uygunKartlar.length));
    let sayi = uygunKartlar[ran1];
    uygunKartlar.splice(ran1,1);
    let ran2 = int(random(0,uygunKartlar.length));
    let sayi2 = uygunKartlar[ran2];
    uygunKartlar.splice(ran2,1);

    kartlarArray[sayi].kartOnYuzu=kartOnYuzu[i];
    kartlarArray[sayi2].kartOnYuzu=kartOnYuzu[i];
    kartlarArray[sayi].id=i;
    kartlarArray[sayi2].id=i;
  }
}