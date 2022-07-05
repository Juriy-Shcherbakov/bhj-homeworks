const itemsOfmenu = document.querySelectorAll(".menu__link");

for (let element of itemsOfmenu) { 

    let nextItem = element.nextElementSibling; // "null" либо "<ul class="menu menu_sub"></ul>""
        //Свойство nextElementSibling содержит следующий элемент,находящийся в этом же родителе.
    console.log(nextItem);

    if (nextItem) { 
        
        element.onclick = () => {
            const activeMenu = document.querySelector(".menu_active"); //открытие вложенного меню
            
             if (activeMenu && activeMenu !== nextItem) {   //проверка на закрытие соседнего меню
                activeMenu.classList.remove("menu_active");
            } 
            
            nextItem.classList.toggle("menu_active");
            
            return false; //запрет на переход 
        }
    }
}
