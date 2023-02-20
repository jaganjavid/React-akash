console.log(localStorage);

localStorage.setItem("task", "task-1");
localStorage.setItem("taskTwo", "task-2");

console.log(localStorage.getItem("taskTwo"));

localStorage.removeItem("task");

console.log(localStorage.getItem("task"));

localStorage.clear();



