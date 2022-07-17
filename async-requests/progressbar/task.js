
const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
   const xhr = new XMLHttpRequest();
   const formData = new FormData(form);
   
   //индикатор закачки
   xhr.upload.addEventListener("progress", function (event) {
      progress.value = event.loaded / event.total;
   })

   xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
   xhr.send(formData);
})