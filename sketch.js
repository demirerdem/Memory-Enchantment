//////////////////////////////////////////////////////////genel itibariyle oyunum burda çalışıyor 
let kartOnYuzu = [];          //resim ön yüzünün array'i
let kartArkasi;               //resim arkası
let kartlarArray = [];        //
let fareArray=[];             //fare tıklama efekti
let buttonArray=[];           //ana menudeki buttonlar
//////////////////////////////////5 tane alev arrayi oluşturdum çünkü tüm mavi alevleri 1 array'a atarsak alevler çok hızlanıyor
let maviAlevArray1 = [];
let maviAlevArray2 = [];
let maviAlevArray3 = [];  
let maviAlevArray4 = [];
let maviAlevArray5 = [];
let mode;  // oyunun durumları
let oncekiKart;  //tıklanıldığında önceki kartı id sini alıyor

var arkaplanMuzigi,muzikSesiAyarlama,oyunGirisEkraniResim,anaMenuResim;

function preload(){            //resimleri yüklüyoruz   
  for(let i=0;i<12;i++){ kartOnYuzu[i] = loadImage("icons/resim"+i+".png");  }
  kartArkasi = loadImage('icons/kartArkasi1.png'); 
  arkaplanMuzigi = loadSound("anaMenuMuzigi/asleep.mp3");
  oyunGirisEkraniResim = loadImage('icons/oyunGiris.gif');
  anaMenuResim = loadImage("icons/anaMenuResim.gif"); 
}

function setup() {    //buttonlar ve müzik çalması var
  createCanvas(1880, 939);
  mode =-1; 
  arkaplanMuzigi.loop();     //muzigin loopa alınışı

  muzikSesiAyarlama=createSlider(0,1,0.5,0.01);    //ses seviyesi ayarlama
  muzikSesiAyarlama.position(850,900);   
  
  let geridon = new Buttonlar(1700,465, "BACK" ,0);
  buttonArray[0]=geridon;

  let kolay = new Buttonlar(105,265, "Easy" ,1);
  buttonArray[1]=kolay;
 
  let orta = new Buttonlar(130,465, "Medium" ,2);
  buttonArray[2]=orta;

  let zor = new Buttonlar(105,665, "Hard" ,3);
  buttonArray[3]=zor;
}

function draw() {   //giris ekranı ve ana menu ekranı burda drawlanıyor   
  if (mode == -1){   /////////////////////////oyun giris ekranı modu
    background(0);     
    imageMode(CORNER);
    image(oyunGirisEkraniResim, 0, 60,1880,820);
    noStroke();
    push()
    fill(238, 112, 71,120)
    rect(0,435,1880,50)
    pop();
    textSize(35)
    textFont('Chiller');
    text('Click to start the game',823,468);    
  }

  if (mode != -1){////////////////////////////////////////////oyun ana menu ve bölümlerin modu
    push();
    background(0); 
    imageMode(CORNER);
    image(anaMenuResim, 0, 60,2000,820);
    pop();
    arkaplanMuzigi.setVolume(muzikSesiAyarlama.value());

    anaMenu()    ///////ana menude gözükenleriin fonksiyonları
  }  
/////////////////////////////volume down ve volume up yazılarını hem oyun girişte hemde ana menude göstermek 
  push();
  textFont('Chiller');
  textSize(53);
  fill(114,60,128);
  text("Volume Down",640,925);
  text("Volume Up",1000,925);
  pop();
} 

function mousePressed(){ //mouse tıklanınca olanlar
  if(mode==-1){/////////////////////////////////giriş ekranından ana menuye gitme 
    mode=0;
  }
  /////////////////////////////////bölüm bittiğinde gözükenler
  if (k==1){        
    mode=0;
    k=0;
  }  

  ///////////////////////////kartların tıklanmasi
  for (let i = 0;i<kartlarArray.length;i++){   
    kartlarArray[i].clicked(mouseX,mouseY);
  }   

  ///////////////////////////////buttonların tıklanmasi
  for (let i = 0; i < buttonArray.length; i++){  
    buttonArray[i].clicked(mouseX, mouseY,i*6+6);
  }

  ////////////////////////////fare tıklayınca aynı anda bir tane şekil çıkıyor
  let yaricap = random(20,30);  
  let i= new fareTıklama(mouseX, mouseY,yaricap);
  fareArray.push(i); 

 /*////////////////////////fare tıklayınca aynı anda 5 tane şekil çıkıyor
 let yaricap = random(20,30);
  for (let i = 0; i < 5; i++) {    
    fareArray[i] = new fareTıklama(mouseX, mouseY,yaricap);
  }
  */
} 
function keyPressed(){  //klavye inputları
  if(keyCode == 27){ //////////////////esc tusuna basınca giris ekranına döner
    mode =-1;
  }
}

