const input = document.getElementById("task-input");
const addbtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
    list.innerHTML = "";
        tasks.forEach(function (task, index) {
            const li = document.createElement("li");
            if (task.done) li.classList.add("done");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.done;
            checkbox.addEventListener("change", function () {
                tasks[index].done = checkbox.checked;
                saveTasks();
                render();
            });
            const span = document.createElement("span");
            span.textContent = task.text;
            const delbtn = document.createElement("button");
            delbtn.textContent = "Delete";
            delbtn.addEventListener("click", function () {
                tasks.splice(index, 1);
                saveTasks();
                render();
            });
            li.append(checkbox, span, delbtn);
            list.appendChild(li);
        });
}

function addTask() {
    const text = input.value.trim();
    if (text === "") return;
    tasks.push({ text: text, done: false });
    saveTasks();
    render();
    input.value = "";
    input.focus();
}

addbtn.addEventListener("click", addTask);
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
render();