const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
let isJumping = false;

// Função para pular
function jump() {
    if (!isJumping) {
        isJumping = true;
        player.classList.add("jump");
        setTimeout(() => {
            player.classList.remove("jump");
            isJumping = false;
        }, 500);
    }
}

// Eventos para pular
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") jump();
});

document.addEventListener("click", jump);
document.addEventListener("touchstart", jump);

// Verifica colisão
setInterval(() => {
    const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

    if (obstacleLeft > 20 && obstacleLeft < 60 && playerBottom < 30) {
        alert("Game Over!");
        location.reload();
    }
}, 50);