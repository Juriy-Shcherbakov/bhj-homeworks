const interestCheck = document.querySelectorAll(".interest__check");

interestCheck.forEach(elemInput => { 

    elemInput.onclick = function() { 

        if (!elemInput.closest(".interests_active")) { //если чек-бокс родительский

            //поиск дочерних чекбоксов
            elemInput.parentElement.nextElementSibling.querySelectorAll("input").forEach(elemChild => {

                // связь состояния родительского чек-бокса с дочерними
                if (elemInput.checked) {
                    elemChild.checked = true
                } else {
                    elemChild.checked = false
                }
            });
        }
    }
});
