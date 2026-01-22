Telegram.WebApp.ready();

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const size = 30;
const speed = 20;

let s1 = 0, s2 = 0;

const p1 = { x: 80, y: 420, color: "red" };
const p2 = { x: 280, y: 80, color: "blue" };

function drawPlayer(p) {
  ctx.fillStyle = p.color;
  ctx.fillRect(p.x - size/2, p.y - size/2, size, size);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer(p1);
  drawPlayer(p2);
}

function move(player, dir) {
  const p = player === 1 ? p1 : p2;
  p.x += dir * speed;
  p.x = Math.max(size/2, Math.min(canvas.width - size/2, p.x));
  draw();
}

function attack(player) {
  if (player === 1 && Math.abs(p1.x - p2.x) < 40) s1++;
  if (player === 2 && Math.abs(p2.x - p1.x) < 40) s2++;
  updateScore();
}

function updateScore() {
  document.getElementById("score").innerText =
    `🔴 ${s1} : ${s2} 🔵`;

  if (s1 === 5) alert("🔴 Красный победил!");
  if (s2 === 5) alert("🔵 Синий победил!");
}

draw();
