const divShow = document.getElementsByClassName("reveal"); 

document.addEventListener("scroll", handler); 

function handler() {

    for (i of divShow) {
        let divPosition =  i.getBoundingClientRect(); 

        if (divPosition.top  < window.innerHeight) { 
            i.classList.add("reveal_active");
        } else {
            i.classList.remove("reveal_active");
        }
    }
}
