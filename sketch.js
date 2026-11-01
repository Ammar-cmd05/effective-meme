let zombieX = 150;
let zombieY = 235;
let zombieSpeedX = 0;

let ghostX = 350;
let ghostY = 160;
let ghostSpeedX = 0;
let ghostSpeedY = 0;

let score = 0;
let startTime;
let gameDuration = 30;

function setup() {
  createCanvas(480, 360);
  startTime = millis();
  textFont("Arial");
}

function draw() {
  background(20, 15, 35);

let elapsedTime = millis() - startTime;
let timeLeft = gameDuration - floor(elapsedTime / 1000);

if (elapsedTime >= gameDuration * 1000) {
  startTime = millis();
  score = 0;

  zombieX = 150;
  zombieY = 235;
  ghostX = 350;
  ghostY = 160;

  zombieSpeedX = 0;
  ghostSpeedX = 0;
  ghostSpeedY = 0;

  timeLeft = gameDuration;
} 

  noStroke();
  fill(255, 255, 210);

  for (let i = 0; i < 35; i++) {
    let x = (i * 73 + 17) % width;
    let y = (i * 47 + 13) % 200;
    ellipse(x, y, 3, 3);
  }

  fill(255, 240, 180);
  ellipse(410, 65, 45, 45);

  fill(20, 15, 35);
  ellipse(425, 55, 40, 40);

  drawCloud(100, 100);
  drawCloud(300, 125);

  noStroke();
  fill(30, 45, 45);
  rect(0, 280, width, 80);

  if (frameCount % 60 == 0) {
    zombieSpeedX = random(-1.5, 1.5);
  }

  zombieX += zombieSpeedX;
  zombieX = constrain(zombieX, 30, width - 30);
  zombieY = 235;

  if (frameCount % 45 == 0) {
    ghostSpeedX = random(-2, 2);
    ghostSpeedY = random(-1.5, 1.5);
  }

  ghostX += ghostSpeedX;
  ghostY += ghostSpeedY;

  ghostX = constrain(ghostX, 30, width - 30);
  ghostY = constrain(ghostY, 90, 250);

  drawZombie(zombieX, zombieY);
  drawGhost(ghostX, ghostY);

  fill(255, 165, 0);
  textSize(24);
  text("Score: " + score, 20, 35);

  fill(255, 165, 0);
  textSize(24);
  text("Time: " + timeLeft, 340, 35);
}

function drawZombie(x, y) {
  noStroke();

  fill(65, 130, 65);
  rect(x - 20, y + 25, 40, 45, 8);

  fill(75, 145, 75);
  rect(x - 32, y + 30, 12, 30, 5);
  rect(x + 20, y + 30, 12, 30, 5);

  fill(100, 180, 90);
  ellipse(x, y, 42, 40);

  fill(35, 45, 30);
  rect(x - 18, y - 22, 12, 8, 3);
  rect(x - 5, y - 24, 14, 8, 3);

  fill(255);
  ellipse(x - 8, y - 3, 12, 12);
  ellipse(x + 8, y - 3, 12, 12);

  fill(0);
  ellipse(x - 8, y - 3, 5, 5);
  ellipse(x + 8, y - 3, 5, 5);

  fill(45, 25, 25);
  rect(x - 10, y + 9, 20, 6, 2);

  fill(255);
  rect(x - 5, y + 9, 4, 5);
  rect(x + 3, y + 9, 4, 5);

  fill(45, 55, 75);
  rect(x - 15, y + 65, 12, 20, 4);
  rect(x + 3, y + 65, 12, 20, 4);
} 

function drawGhost(x, y) {
  noStroke();
  fill(240, 245, 255);
  ellipse(x, y, 48, 50);
  ellipse(x - 15, y + 15, 18, 25);
  ellipse(x, y + 18, 18, 25);
  ellipse(x + 15, y + 15, 18, 25);

  fill(30, 35, 55);
  ellipse(x - 9, y - 3, 7, 10);
  ellipse(x + 9, y - 3, 7, 10);

  fill(30, 35, 55);
  ellipse(x, y + 10, 8, 10);
}

function drawCloud(x, y) {
  noStroke();
  fill(100, 110, 140);

  ellipse(x, y, 60, 40);
  ellipse(x + 25, y - 15, 50, 50);
  ellipse(x + 50, y, 60, 40);
  ellipse(x + 25, y + 7, 70, 35);
}

function mousePressed() {
  
  if (
    mouseX > zombieX - 30 &&
    mouseX < zombieX + 30 &&
    mouseY > zombieY - 25 &&
    mouseY < zombieY + 90
  ) {
    score++;
    zombieX = random(40, width - 40);
  }

  else if (
    mouseX > ghostX - 30 &&
    mouseX < ghostX + 30 &&
    mouseY > ghostY - 30 &&
    mouseY < ghostY + 35
  ) {
    score++;
    ghostX = random(40, width - 40);
    ghostY = random(100, 240);
  }
}
