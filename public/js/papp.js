var app = new PIXI.Application(600, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

const pacImages = [
  "res/pacman_1.png",
  "res/pacman_2.png",
  "res/pacman_3.png",
  "res/pacman_4.png",
  "res/pacman_5.png"
];

const textures = pacImages.map((img) => {
  return PIXI.Texture.fromImage(img)
})

const pacSprite = new PIXI.extras.AnimatedSprite(textures);
pacSprite.animationSpeed = 0.2
pacSprite.anchor.set(0.5)
pacSprite.vx = 0
pacSprite.vy = 0
pacSprite.x = 100
pacSprite.y = 100
pacSprite.play()
pacSprite.interactive = true
app.stage.addChild(pacSprite)

const handleKeyDown = (e) => {
  const acc = 2

  switch (e.code) {
    case "ArrowUp":
      pacSprite.vx = 0
      pacSprite.vy = -acc
      pacSprite.rotation = (Math.PI * 3) / 2
      break;
    case "ArrowDown":
      pacSprite.vx = 0
      pacSprite.vy = acc
      pacSprite.rotation = Math.PI / 2
      break;
    case "ArrowLeft":
      pacSprite.vx = -acc
      pacSprite.vy = 0
      pacSprite.rotation = Math.PI
      break;
    case "ArrowRight":
      pacSprite.vx = acc
      pacSprite.vy = 0
      pacSprite.rotation = Math.PI * 2
      break;
    case "Space":
      pacSprite.vx = 0
      pacSprite.vy = 0
      break;
  }
}

window.addEventListener('keydown', handleKeyDown)



app.ticker.add((delta) => {
  pacSprite.x += pacSprite.vx
  pacSprite.y += pacSprite.vy
})
