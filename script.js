let editItem = null;

function addTodo() {
  let input = document.getElementById("todoInput");
  let value = input.value.trim();

  if (value === "") {
    alert("Empty todo not allowed");
    return;
  }

  if (editItem) {
    editItem.innerText = value;
    editItem = null;
    input.value = "";
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = value;

  let actions = document.createElement("div");
  actions.className = "actions";

  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = function () {
    input.value = span.innerText;
    editItem = span;
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("todoList").appendChild(li);
  input.value = "";
}

function deleteAll() {
  document.getElementById("todoList").innerHTML = "";
}
