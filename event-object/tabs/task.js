const contents = Array.from(document.querySelectorAll('.tab__content'));
const tabArr = Array.from(document.querySelectorAll('.tab'))

for (let i = 0; i < tabArr.length; i++) { 

    tabArr[i].addEventListener('click', () => { 
        
        tabArr.forEach((i) => i.classList.remove('tab_active')); 
        contents.forEach((i) => i.classList.remove('tab__content_active'));

        tabArr[i].classList.add('tab_active');
        contents[i].classList.add('tab__content_active'); 
    });
};
