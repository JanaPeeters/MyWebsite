class surfBoard {
  constructor() {
    this.xpos = width;
    this.ypos = 0;
    this.spacing = 50;
    this.top = random(height / 6, (3 / 4) * height); //hoogte van de bovenste ellipsen of surfplanken
    this.bottom = height - this.top - this.spacing; //hoogte van de onderste ellipsen of surfplanken
    this.objectColor = '#ffc012';
    this.xSpeed = 10;
    this.objectWidth = 80; //breedte van de ellipsen of surfplanken
  }
  
  display() {
    fill(this.objectColor);
    noStroke();
    ellipse(this.xpos, 0, this.objectWidth, this.top);
    ellipse(this.xpos, height, this.objectWidth, this.bottom);
  }

  update() {
    this.xpos -= this.xSpeed;
  }

  offscreen(){
    if(this.xpos < -this.objectWidth){
      return true;
    } else{
      return false;
    }
  }
}
