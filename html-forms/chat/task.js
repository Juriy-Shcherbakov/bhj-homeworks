const chat = document.querySelector(".chat-widget");  
const messages = document.querySelector(".chat-widget__messages");
const chatWidgetInput = document.getElementById("chat-widget__input");
const botMessagesArr = [
    "Кто тут?",
    "Где ваша совесть?",
    "Мы ничего не будем вам продавать!",
    "К сожалению, все операторы заняты. Не пишите нам больше!",
    "Добрый день! До свидания!",
    "Вы не купили ни одного товара для того, что бы так разговаривать!"
];

// открыть окно чата
chat.addEventListener("click", () => {
    chat.classList.add("chat-widget_active");
});

chatWidgetInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && chatWidgetInput.value != "") {

        let time = new Date().getHours() + ':' + new Date().getMinutes();
        let botMessage = botMessagesArr[Math.floor(Math.random() * botMessagesArr.length)]

        messages.innerHTML += `
        <div class="message message_client">  
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${chatWidgetInput.value}
        </div>
        </div>
        <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">
        ${botMessage}
        </div>
        </div>`;

        chatWidgetInput.value = "";
    };
});
