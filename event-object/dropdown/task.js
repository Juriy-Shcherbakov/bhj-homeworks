const valueItem = document.querySelector(".dropdown__value"); // содержит выбранное значение.
const subMenu = document.querySelector(".dropdown__list");       // воложенное меню ТЕКСТ
const menuItems = document.querySelectorAll(".dropdown__item");  // воложенное меню ОТОБРАЖЕНИЕ

valueItem.addEventListener("click", menuWindow); // привязка клика на открытие списка меню

function menuWindow() {
    subMenu.classList.toggle("dropdown__list_active"); //открыть меню
}

for (let item of menuItems) { //привязка клика на все пункты (перезапись и закрытие)
    item.addEventListener("click", menuItem);
}

function menuItem(event) {
    event.preventDefault();
    valueItem.textContent = event.currentTarget.textContent; // перезапись при выборе
    subMenu.classList.remove("dropdown__list_active"); //закрыть меню
}
