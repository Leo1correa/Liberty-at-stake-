
window.onload = () => {
  setTimeout(() => {
    document.getElementById('logo-screen').style.display = 'none';
    document.getElementById('gameCanvas').style.display = 'block';
    startGame();
  }, 6000);
};

function startGame() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "#e0d7c3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = "30px Georgia";
  ctx.fillStyle = "#333";
  ctx.fillText("Aqui começa o jogo!", 50, 100);
}
