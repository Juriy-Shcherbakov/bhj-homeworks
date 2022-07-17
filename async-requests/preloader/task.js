const items = document.getElementById("items");
const loader = document.getElementById("loader");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.responseType = "json"
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState == xhr.DONE && xhr.status == 200) {

    loader.classList.remove("loader_active"); 
    let responseArr = xhr.response.response.Valute;

    for (let i in responseArr) {
      items.innerHTML += `
        <div class="item">
            <div class="item__code">
                ${responseArr[i].CharCode}
            </div>
            <div class="item__value">
                ${responseArr[i].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>
        `;
    }
  }
});