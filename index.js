import getDeltaTime from "../util/deltaTime.js";
import Player from "./myClass/Player.js";
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext("2d");

const playerState = {
  speed: 100,
  defaultSpawnX: 100,
  defaultSpawnY: canvas.height / 2,
  size: 30,
  color: "blue",
};

const keys = {};
const player = new Player(
  playerState.defaultSpawnX,
  playerState.defaultSpawnY,
  playerState.size,
  playerState.color
);
player.update(c);
window.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});
window.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

function animate(currentTime) {
  c.clearRect(0, 0, canvas.width, canvas.height);
  const delta = getDeltaTime(currentTime);
  playerMovement(player, playerState.speed, delta);
  player.update(c);

  requestAnimationFrame(animate);
}

animate(0);

/**
 * @param {player} - Player Object
 * @param {speed} - Speed the player moves
 * @param {deltaTime} - DeltaTime
 */

function playerMovement(player, speed, deltaTime) {
  if (keys["KeyW"]) {
    player.y -= speed * deltaTime;
  }

  if (keys["KeyS"]) {
    player.y += speed * deltaTime;
  }
  if (keys["KeyD"]) {
    player.x += speed * deltaTime;
  }
  if (keys["KeyA"]) {
    player.x -= speed * deltaTime;
  }
}
