let myRobot;
let mySurfBoard = [];
let gameStarted = false;
let hittingSound; //deze ging gebruikt worden als de hitfunctie werkte 
let gameSound;
let winningSound; //deze ging gebruikt worden als de hitfunctie werkte
let backgroundImg;
let font1; //font hoofdtitel
let font2; //font paragraaf 


function preload() {
  
  soundFormats('mp3');
  hittingSound = loadSound('data/punch.mp3');
  gameSound = loadSound('data/Hawaïmuziek_game.mp3');
  winningSound = loadSound('data/Hawaïmuziek_einde_game.mp3');
  backgroundImg = loadImage('data/water.jpg');
  font1 = loadFont('data/Pacifico.ttf');
  font2 = loadFont('data/Roboto-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Robot
  myRobot = new robot();
  myRobot.xpos= 200;
  myRobot.ypos= height/2;

  //Surfborden
  mySurfBoard.push(new surfBoard());

  backgroundImg.resize(width,height);


  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  backgroundImg.resize(width, height);
}

function draw() {
  image(backgroundImg, 0, 0); //achtergrond 

  if (gameStarted) { //Wordt alleen uitgevoerd als de game gestart is
    for (let i = mySurfBoard.length - 1; i >= 0; i--) {
      mySurfBoard[i].display();
      mySurfBoard[i].update();
    
      if (mySurfBoard[i].offscreen()) {
        mySurfBoard.splice(i, 1);
      } 
    }
    myRobot.display();
    myRobot.glowingBelly(500);
  
    //Bepaal de bewegingsvector gebaseerd op de muispositie
    let mouseYDiff = mouseY - myRobot.ypos; //Verschil tussen de muispositie en y-coördinaat van Stitch
    
    //Pas de positie van Stitch aan volgens de bewegingsvector
    myRobot.ypos += mouseYDiff * 0.5; //Pas de y-coördinaat aan met een snelheid van 0.5
    
    myRobot.drive();
  
    if (frameCount % 30 ==0){
      mySurfBoard.push(new surfBoard()); // Dit zorgt ervoor dat er bij elke nieuwe framecount een nieuwe set aan surfborden wordt weergegeven
    }
    

  } else {
    // Tekst weergeven om te laten zien dat de game nog niet is gestart
    textAlign(CENTER);
    
    textFont(font1);
    textSize(75);
    fill(255);
    text("Stitch's Water World", width / 2, height / 2-100);

    textFont(font2);
    fill('#fca503');
    textSize(20); 
    text("Help Stitch om de surfborden te ontwijken. Gebruik hiervoor de muis.",width / 2, height / 2-40);
    textSize(20); 
    text("Je kan Stitch verkleinen door de muis in te drukken.",width / 2, height / 2-10);
    textSize(20); 
    text("Klaar? Druk in het scherm om te beginnen!",width / 2, height / 2+20);

  }
}

function mouseClicked() {
  // Controleer of er op de knop is geklikt en start de game
  if (!gameStarted && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    gameStarted = true;
     gameSound.play(); // Het nummer begint te spelen vanaf de game gestart is
  }}


function mousePressed() {
  // Wanneer er op de muis wordt geklikt, wordt de schaal van het object aangepast
  myRobot.robotSize *= 0.6; // Hier wordt de schaal met 0.6 vermenigvuldigd om het object te verkleinen
}

function mouseReleased() {
  // Wanneer de muis wordt losgelaten, wordt de schaal van het object teruggezet naar de oorspronkelijke grootte
  myRobot.robotSize /= 0.6;
}