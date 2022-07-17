let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = "json"
xhr.send();

xhr.onload = () => {
    
    let responseArr = xhr.response;
    console.log(responseArr)

	let pollTitle = document.getElementById('poll__title'); //вопрос
	pollTitle.textContent = responseArr.data.title;

	let answers = document.getElementById('poll__answers'); //ответ
	responseArr.data.answers.forEach(answer => {
		answers.insertAdjacentHTML("beforeEnd", `
        <button class="poll__answer">${answer}</button>
        `)
	})

	let btnAnswer = answers.querySelectorAll('.poll__answer')
    
    btnAnswer.forEach(btn => btn.onclick = () => {
		alert("Спасибо, ваш голос засчитан!");
	});
}