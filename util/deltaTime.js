let lastTime = 0;
function getDeltaTime(currentTime) {
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;
  return deltaTime;
}

export default getDeltaTime;
