const fontSize = document.querySelectorAll('.font-size')
const fontSizeArr = Array.from(fontSize);
const bookContentSize = document.getElementById('book');
let activeIndex = 1;

fontSizeArr.forEach((elem, index) => {

    elem.addEventListener('click', () => {
        event.preventDefault();
        fontSizeArr[activeIndex].classList.remove('font-size_active');
        elem.classList.add('font-size_active');
        activeIndex = index;
        const className = elem.dataset.size ? ` book_fs-${elem.dataset.size}` : "";
        bookContentSize.className = `book${className}`;
    })
})




