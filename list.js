const task = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const total = document.getElementById("total");
const doneTotal = document.getElementById("doneTotal");

const createList = (text) => {
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `<span><input type="checkbox" class="me-1" onchange="done(event)" />${text}</span
          ><div class="btn-group"><button class="btn btn-outline-dark btn-sm editBtn">          <i class="bi bi-pencil pe-none"></i>
          </button><button class="btn btn-danger btn-sm delBtn">          <i class="bi bi-trash3 pe-none"></i>
          </button></div>`;
  list.append(li);
};

// const btnClick = () => {
//   [...list.children].forEach((li) => {
//     li.querySelector(".editBtn").addEventListener("click", edit);
//     li.querySelector(".delBtn").addEventListener("click", del);
//   });
// };

const counter = () => {
  const lists = list.children;
  const listArr = [...lists];

  // listArr.filter(list => )
  doneTotal.innerText = listArr.filter(
    (list) => list.querySelector("input").checked === true
  ).length;
  total.innerText = list.children.length;
};

const del = (event) => {
  if (confirm("Are you sure to delete?")) {
    event.target.closest("li").remove();
    counter();
  }
};

const edit = (event) => {
  let originalTask =
    event.target.parentElement.previousElementSibling.innerText;
  // console.log(originalTask);
  const newTask = prompt("What do you want to change ?", originalTask);
  if (newTask) {
    event.target.parentElement.previousElementSibling.innerHTML = `<input type="checkbox" class="me-1" onchange="done(event)" />${newTask}`;
  }
};

const done = (e) => {
  e.target.parentElement.classList.toggle("text-decoration-line-through");
  counter();
};

const addList = () => {
  if (task.value.trim()) {
    createList(task.value);
    task.value = null;
    counter();
    // btnClick();
  } else {
    alert("Please enter some tasks");
  }
};

const addwithEnter = (e) => {
  if (e.key === "Enter") {
    addList();
    // btnClick();
  }
};

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    if (confirm("Are you sure to delete?")) {
      console.log(event.target);
      event.target.closest("li").remove();
      counter();
    }
  } else if (e.target.classList.contains("editBtn")) {
    let originalTask =
      event.target.parentElement.previousElementSibling.innerText;
    // console.log(originalTask);
    const newTask = prompt("What do you want to change ?", originalTask);
    if (newTask) {
      event.target.parentElement.previousElementSibling.innerHTML = `<input type="checkbox" class="me-1" onchange="done(event)" />${newTask}`;
    }
  }
});

addBtn.addEventListener("click", addList);

task.addEventListener("keyup", addwithEnter);
