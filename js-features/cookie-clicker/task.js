const image = document.getElementById("cookie");                
const counter = document.getElementById("clicker__counter");

image.onclick = function () {       
    counter.textContent++;          
    const currentCount = counter.textContent;

    if (currentCount % 2 === 0) {       
        image.width  = 200;

    } else {                        
        image.width = 250;
    }  
}