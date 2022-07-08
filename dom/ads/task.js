let activeText = document.querySelector('.rotator__case_active');
let firstText = document.querySelector('.rotator').firstElementChild;
let lastText = document.querySelector('.rotator').lastElementChild;

setInterval(
    function rotation () {

        activeText.classList.remove('rotator__case_active');
        if (activeText === lastText) {
            activeText = firstText;
        } else {
            activeText = activeText.nextElementSibling;
        }   
        activeText.classList.add('rotator__case_active');
    }, 1000
)
