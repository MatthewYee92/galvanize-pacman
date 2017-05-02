let pacman;
let anim;

function preload() {
  anim = loadAnimation(
    "res/pacman_1.png",
    "res/pacman_2.png",
    "res/pacman_3.png",
    "res/pacman_4.png",
    "res/pacman_5.png"
  );
}

function setup() {
  createCanvas(600, 600)
  pacman = createSprite(200, 200, 40, 40);
  pacman.addAnimation("floating", anim);
  pacman.rotateToDirection = true;
}

function draw() {
  background(50) // clear canvas for re-render
  drawSprites()
}

function keyPressed() {
  const vel = 3
  switch (keyCode) {
    case UP_ARROW:
      pacman.setSpeed(vel, 270);
      break;
    case DOWN_ARROW:
      pacman.setSpeed(vel, 90);
      break;
    case RIGHT_ARROW:
      pacman.setSpeed(vel, 0);
      break;
    case LEFT_ARROW:
      pacman.setSpeed(vel, 180);
      break;
    default: pacman.setSpeed(0, 0)
  }
}
