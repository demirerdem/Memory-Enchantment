class fareTıklama {
  constructor( _x, _y,_yariCap){
    this.x = _x;
    this.y = _y;
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1) * sqrt(9 - this.xSpeed * this.xSpeed)
    this.yarıCap =_yariCap;
    
    this.nokta1 = random(70,80);
    this.nokta2 = random(35,40);
  }
//////////////////////////////////////////fare tklama'nın şeklinin gösterilmesi
  show(){   //fare tklama'nın şeklinin gösterilmesi
    push();
  	translate(this.x, this.y);
    fill(random(80,100),random(90,150), random(150,200));
    noStroke();
    ellipse(0, 0, this.yarıCap    );
    ellipse(40, 0, this.yarıCap  );
    ellipse(40, 40, this.yarıCap  );
    ellipse(0, 40, this.yarıCap  );    
    quad(20,0,   40,20,   20,40,   0,20)   
    pop();    
  }
///////////////////////////////////////aşağı düsme efekti
  hareketEttir(){
    this.ySpeed += 0.05;    
    this.x += this.xSpeed * 2.5;
    this.y += this.ySpeed * 2.5;
    
    this.yarıCap -= 0.50;
  }
}