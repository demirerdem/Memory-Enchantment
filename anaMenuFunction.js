////////////////ana menu ekranı fonksiyonu 

function anaMenu(){  
    ////////////////////////////////////////////////mavi alevlerin oluşturulup hareket ettirilmesi
    maviAlevOlustur1(10,500);//işaret
    maviAlevOlustur3(200,500);//orta
    maviAlevOlustur2(110,500);//yüzük
    maviAlevOlustur4(300,550);//serçe
    maviAlevOlustur5(100,450);/////başparmak    
    
    /////////////////////////////////////////fare tıklatma efektinin gösterilmesi
    for (let i = fareArray.length-1; i >=0; i--){   
      fareArray[i].show();
      fareArray[i].hareketEttir();
      if(fareArray[i].yarıCap <= 0 ){     //şekildeki yuvarlakların yarıçapı 0 dan küçükse ,o diziyi sil
        fareArray.splice(i,1);       
      }    
    }  
    
    
      //////////////////////////////////////////////buttonların gösterilmesi
      if(mode==0){          ///////////kartları gösterilmediği zaman kolay orta ve zor buttonları gözüksün///////////////
        for (let i = 1; i < buttonArray.length; i++){
          buttonArray[i].buttonGoster();
        } 
      }
    
    if(mode==1 || mode==2 || mode==3){                        //kart arkası ve önünün birleştiği kısım
      for (let i = 0; i<(mode*6 + 6);i++){
        kartlarArray[i].kartArkasi=kartArkasi;  //kart arkasi resimleri class'a atılıyor
        kartlarArray[i].kartArkaPlanıGoster();  
        buttonArray[0].buttonGoster(); ///////////kartlar gözüktüğünde sadece geri dön butonu gözüksün///////////
        if(kartlarArray[i].show){
          kartlarArray[i].resimGoster();
        }
      }
    }
    if(k==1){///////////////////////////////bölüm bittiğinde olacaklar
      push();
      fill(135, 141, 150,120);  
      rectMode(CORNER);
      rect(0,0,2080,939)
      pop();
    
      push();
      fill(92, 139, 209,120)
      rect(0,435,1880,50)
      pop();
    
      text()
      textSize(40)
      textFont('Chiller');
      text('Congratulations ,  click to continue',750,475);    
    }
}