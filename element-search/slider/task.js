const sliders = document.querySelectorAll(".slider__item");
const prevButton = document.querySelector(".slider__arrow_prev"); // <
const nextButton = document.querySelector(".slider__arrow_next"); // >

let index = 0;

function showSlider (number) { // начать со слайдера с номером

    if (number > sliders.length - 1) {   // если № слайда > реального числа
        index = 0;
    }

    if (number < 0) {                   // если № слайда < 0
        index = sliders.length - 1; 
    }

    for (let slider of sliders) {
        slider.classList.remove("slider__item_active")
    }

    sliders[index].classList.add("slider__item_active")
}


nextButton.onclick = () => {
    showSlider((index += 1));
}

prevButton.onclick = () => {
    showSlider((index -= 1));
}

showSlider(index)