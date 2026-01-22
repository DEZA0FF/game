let score = 0;
const scoreEl = document.getElementById('score');
const btn = document.getElementById('attack');
const userEl = document.getElementById('user');

const tg = window.Telegram.WebApp;
tg.expand();

if (tg.initDataUnsafe?.user) {
    userEl.innerText = `Игрок: ${tg.initDataUnsafe.user.first_name}`;
}

btn.onclick = () => {
    score++;
    scoreEl.innerText = score;
    tg.HapticFeedback.impactOccurred("light");
};
