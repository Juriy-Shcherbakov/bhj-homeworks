const tasksInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

tasksAdd.addEventListener("click", (event) => {
    event.preventDefault();
    if (tasksInput.value.trim()) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        taskDiv.insertAdjacentHTML("beforeEnd", `
            <div class="task__title">
                ${tasksInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `);
        
        tasksInput.value = "";
        tasksList.appendChild(taskDiv);

        const buttomRemove = taskDiv.querySelector(".task__remove");
        buttomRemove.addEventListener("click", (event) => {
            event.currentTarget.closest(".task").remove();
        });
    }
});
