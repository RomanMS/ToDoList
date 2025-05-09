document.getElementById("form").addEventListener("submit", function(e) {
e.preventDefault();
const taskInput = document.getElementById("input-task");
const task = taskInput.value.trim();

if (!task) return;

fetch('/api/tasks', {
method: "POST",
headers: { "Content-Type" : "application/json" };
body: JSON.stringify({ text : task })
})
.then(response => {
return response.json();
}
.then(someTaskjsobj => {
taskInput.value = "";
                 
const divTask = document.getElementById("spisok-zadach");
const elemLi = document.createElement("li");

elemLi.textContent = someTaskjsobj.text;
divTask.appendChild(elemLi);
})
.catch(error => console.error("ошибка:" error));
});
