const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue"; // Set stroke color
    c.stroke();
  };
  update = () => {
    this.draw();
  };
}
const keys = {};
const speed = 2;
const player = new Player(200, 100);
player.update();
window.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});
window.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  if (keys["KeyW"]) {
    player.y -= speed;
  }

  if (keys["KeyS"]) {
    player.y += speed;
  }
  if (keys["KeyD"]) {
    player.x += speed;
  }
  if (keys["KeyA"]) {
    player.x -= speed;
  }
  player.update();
  requestAnimationFrame(animate);
}

animate();

let fps = 1;
const times = [];
const fpsLoop = (timestamp) => {
  while (times.length > 0 && times[0] <= timestamp - 1000) {
    times.shift();
  }
  times.push(timestamp);
  fps = times.length;
  console.log(fps);
  requestAnimationFrame(fpsLoop);
};
requestAnimationFrame(fpsLoop);
