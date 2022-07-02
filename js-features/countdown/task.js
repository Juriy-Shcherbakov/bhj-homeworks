const counter = document.getElementById("timer");   
let timeInSecond = counter.textContent;     

let timeId = setInterval(() => {   
   
    if (timeInSecond > 0) {            
        timeInSecond --;                
        counter.textContent = timeInSecond; 
    } else {
        clearTimeout(timeId);               
        alert("Вы победили в конкурсе")     
    }
}, 1000);                               