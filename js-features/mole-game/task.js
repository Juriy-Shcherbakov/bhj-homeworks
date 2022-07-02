const holes = document.getElementsByClassName("hole"); //поиск по классу
const killsCounter = document.getElementById("dead"); //поиск по id
const missCounter = document.getElementById("lost"); //поиск по id

for (let hole of holes) { // перебор всех тегов с классом "hole"

    hole.onclick = function() { // привязка ко всем тегам с классом "hole" функции

        if (hole.classList.contains("hole_has-mole")) { // активный тег с кротом, переназначается в base.js
            killsCounter.textContent++;
        } else {
            missCounter.textContent++;
        }

        if (killsCounter.textContent == 10) {
            gameOver("Вы победили");
        }

        if (missCounter.textContent == 5) {
            gameOver("Вы проиграли");
        }
    }
};

function gameOver(messege) {

    alert(messege);
    killsCounter.textContent = 0;
    missCounter.textContent = 0;
};