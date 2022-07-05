const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active"); //modal_active - открытие окна через добавление класса

const closePopup = document.querySelectorAll('.modal__close'); //modal__close -  X 

for (let btn of closePopup) { // перебор всех тегов с классом .modal__close -  X
    btn.onclick = () => {
        btn.closest('.modal').classList.remove('modal_active'); //удаление класса на отображение окна при клике X
    }
}
// По нажатию на элемент с классом show-success покажите окно #modal_success
const showSuccess = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

showSuccess.onclick = () => {
    modalMain.classList.remove("modal_active"); // закрытие окна "Сделать хорошо"
    modalSuccess.classList.add("modal_active"); // открытие окна "Хорошо сделано!"
}
