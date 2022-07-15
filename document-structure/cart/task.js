const productDecBtns = document.querySelectorAll(".product__quantity-control_dec"); 
const productIncBtns = document.querySelectorAll(".product__quantity-control_inc"); 
const productAddBtns = document.querySelectorAll(".product__add"); 

for (let i = 0; i < productDecBtns.length; i++) {
    productDecBtns[i].addEventListener("click", productDec);
    productIncBtns[i].addEventListener("click", productInc);
    productAddBtns[i].addEventListener("click", productAdd);
}

function productDec() {
    let value = this.parentElement.querySelector(".product__quantity-value").textContent;

    if (value > 1) {
        value--;
        this.parentElement.querySelector(".product__quantity-value").textContent = " " + value + " ";
    };
}

function productInc() {
    let value = this.parentElement.querySelector(".product__quantity-value").textContent;
    value++;
    this.parentElement.querySelector(".product__quantity-value").textContent = " " + value + " ";
}

function productAdd() {
    const productCart = this.closest(".product"); 
    const cartImg = productCart.querySelector(".product__image").getAttribute("src"); 
    const cartValue = productCart.querySelector(".product__quantity-value").textContent.trim(); 
    const cartId = productCart.dataset.id;

    if (document.querySelector(`.cart__product[data-id="${cartId}"]`) == null) { 

        let cartNew = document.createElement("div");

        cartNew.className = "cart__product";
        cartNew.dataset.id = productCart.dataset.id;
        cartNew.insertAdjacentHTML("afterbegin", `
            <img class="cart__product-image" src="${cartImg}">
            <div class="cart__product-count">${cartValue}</div>
        `);
        
        document.querySelector(".cart__products").insertAdjacentElement("beforeend", cartNew);

    } else {
        let existingCart = document.querySelector(`.cart__product[data-id="${cartId}"]`);
        existingCartValue = existingCart.querySelector(".cart__product-count").textContent.trim();
        existingCartValue = Number(existingCartValue) + Number(cartValue);
        existingCart.querySelector(".cart__product-count").textContent = existingCartValue;
    }
}
