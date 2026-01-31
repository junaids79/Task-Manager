const API = "http://localhost:5000/api/tasks";
const list = document.getElementById("taskList");
const form = document.getElementById("taskForm");

form.onsubmit = async (e) => {
  e.preventDefault();

  const task = {
    title: title.value,
    description: description.value,
    status: status.value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });

  form.reset();
  fetchTasks();
};

async function fetchTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  list.innerHTML = "";
  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${t.title} - ${t.status}
      <button onclick="deleteTask('${t._id}')">❌</button>
    `;
    list.appendChild(li);
  });
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchTasks();
}

fetchTasks();
