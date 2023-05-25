class robot{
    constructor(){ //default constructor
        this.xpos = width / 2; 
        this.ypos = height / 2;
        this.robotSize = 2;
        this.bodyColor =('#1985B0');
        this.eyeColor =('#9FD7ED');
        this.jointColor =('#33697F');
        this.earColor =('#d499dd');
        this.xSpeed = 5;
        this.timeDelay=500;
        this.timer=0;
        this.timeDelayTrigger=true;
    }

    display(){
        let bodyWidth = 120;
        let bodyHeight = 120;
        

        //assenstelsel verschuiven naar het midden van het scherm
        translate(this.xpos,this.ypos);
        scale(this.robotSize/3);
        
        noStroke();
        //scharnieren arm 
            //linkerarm
            fill(this.bodyColor);
            circle(-60,35,34);
            circle(-120,35,34);
            rect(-120,22,60,25);
        
            fill(this.jointColor);
            circle(-60,35,20);
            circle(-120,35,20);
        
            //rechterarm
            fill(this.bodyColor);
            circle(60,35,35);
            circle(120,35,35);
            rect(60,22,60,25);
        
            fill(this.jointColor);
            circle(60,35,20);
            circle(120,35,20);
          
        
        //lichaam 
        fill(this.bodyColor); 
        rect(-bodyWidth/2,0,bodyWidth,bodyHeight,40,40,10,10);
        fill(this.eyeColor);
        rect((-bodyWidth/2)+10,0,bodyWidth-20,100,30,30,10,10);
        
        
        //verbinding oren met hoofd
        fill(this.bodyColor)
        rect(-108,-85,20,30,5,0,0,5);
        rect(87,-85,20,30,0,5,5,0);
        
        //oren 
          //linkeroor 
          fill(this.bodyColor);
          rect(-155,-180,50,120,0,0,5,100);
          ellipse(-130,-180,50,50);
          //linkerbinnenoor
          fill(this.earColor)
          rect(-148,-182,40,120,0,0,5,100);
          ellipse(-128,-178,40,40);
          
          //rechteroor
          fill(this.bodyColor);
          rect(105,-180,50,120,0,0,100,5);
          ellipse(130,-180,50,50);
          //rechterbinnenoor
          fill(this.earColor)
          rect(108,-182,40,120,0,0,100,2);
          ellipse(128,-178,40,40);
       
        
        //mond
        fill(this.bodyColor);
        ellipse(0,-45,170,80);
          //tanden
          fill(255);
          ellipse(0,-50,160,75);
        
        
        // hoofd
        fill(this.bodyColor);
        arc(0, -65, 200, 200, PI, 0, CHORD);
        ellipse(0,-65,200,80);
        
        //neus 
        fill(0);
        arc(0, -65, 50, 50, 0, PI, CHORD);
        ellipse(0,-65,50,25);
        
        //ogen
          //linkeroog
          fill(0);
          rect(-81,-107,50,60,20,100,10,40);
          fill(this.eyeColor);
          rect(-81,-105,50,60,20,100,10,40);
          //linkerpupil
          fill(0);
          rect(-66,-90,30,40,10,20,5,20);
        
          //rechteroog
          fill(0);
          rect(31,-107,50,60,100,20,40,10);
          fill(this.eyeColor);
          rect(31,-105,50,60,100,20,40,10);
          //rechterpupil
          fill(0);
          rect(36,-90,30,40,20,10,20,5);
          
        //haren
        fill(this.bodyColor);
        triangle(0,-185,-20,-155,10,-145);
        triangle(10,-175,0,-155,20,-155);
        triangle(-15,-178,-30,-145,-10,-145);
        
        //vlammen
        fill('red');
        ellipse(-65,175,35,70);
        ellipse(65,175,35,70);
        
        fill('orange');
        ellipse(-65,175,20,60);
        ellipse(65,175,20,60);
        
        fill('yellow');
        ellipse(-65,175,10,50);
        ellipse(65,175,10,50);
        
        //voetjes
        
          fill(this.bodyColor);
          //linkerknie 
          rect(-90,105,50,55,40,40,5,5);
          fill(this.jointColor);
          rect(-80,105,30,30,40,40,5,5);
        
          //linkervoetje
          fill(this.bodyColor);
          arc(-65, 180, 50, 60, PI, 0, CHORD);
        
        
          //rechterknie
          rect(40,105,50,55,40,40,5,5);
          fill(this.jointColor);
          rect(50,105,30,30,40,40,5,5);
        
          //rechtervoetje
          fill(this.bodyColor);
          arc(65, 180, 50, 60, PI, 0, CHORD);
        
          //nageltjes
          fill(0);
          arc(-85,180,10,15,PI,0, CHORD);
          arc(-65,180,10,15,PI,0, CHORD);
          arc(-45,180,10,15,PI,0, CHORD);
        
          arc(45,180,10,15,PI,0, CHORD);
          arc(65,180,10,15,PI,0, CHORD);
          arc(85,180,10,15,PI,0, CHORD);
    }

   drive(){
    translate(this.xpos, mouseY); //Hiermee beweegt Stitch volgens een vaste x-waarde en volgens de y-ricthing van de muis
}

  //Dit is de animatie met een tijdsinterval
  glowingBelly(timeInterval){
    this.timeDelay=timeInterval; // staat standaard op 500ms
    if (millis()-this.timer >= this.timeDelay)
    {
      this.timeDelayTrigger = !this.timeDelayTrigger; //change the trigger after each delay
      this.timer = millis();
    }

    if (this.timeDelayTrigger) {
      this.bodyColor = color('#d499dd'); //lichaam wordt roos
      this.earColor = color('#9FD7ED'); //oortjes worden blauw
    } else {
      this.bodyColor = color('#1985B0'); //lichaam wordt terug blauw
      this.earColor = color('#d499dd'); //oortjes worden terug roos
    }
  }
}

