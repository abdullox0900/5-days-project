// "use strict";

// let elForm = document.querySelector(".form");
// let elInput = document.querySelector(".input");
// let elList = document.querySelector(".list");

// const todos = [];

// elList.addEventListener("click", function (evt) {
//   if (evt.target.matches(".delete-btn")) {
//     let btnTodoId = evt.target.dataset.todoId * 1;
//     let foundIndex = todos.findIndex((todo) => todo.id === btnTodoId);

//     todos.splice(foundIndex, 1);

//     elList.innerHTML = null;

//     renderTodos(todos, elList);
//   } else if (evt.target.matches(".checkbox-btn")) {
//     let checkTodoId = evt.target.dataset.checkId * 1;

//     let foundCheckTodo = todos.find((todo) => todo.id === checkTodoId);

//     foundCheckTodo.isCompleted = !foundCheckTodo.isCompleted;

//     elList.innerHTML = null;

//     renderTodos(todos, elList);
//   }
// });

// const renderTodos = function (arr, element) {
//   arr.forEach(function (todo) {
//     let newLi = document.createElement("li");
//     let newCheckbox = document.createElement("input");
//     let newDeleteBtn = document.createElement("button");

//     newCheckbox.type = "checkbox";

//     newDeleteBtn.classList.add("delete-btn");
//     newCheckbox.classList.add("checkbox-btn");

//     newLi.textContent = todo.title;
//     newDeleteBtn.textContent = "Delete";

//     newDeleteBtn.dataset.todoId = todo.id;
//     newCheckbox.dataset.checkId = todo.id;

//     if (todo.isCompleted) {
//       newCheckbox.checked = true;
//       newLi.style.textDecoration = "line-through";
//     }

//     element.appendChild(newLi);
//     newLi.appendChild(newCheckbox);
//     newLi.appendChild(newDeleteBtn);
//   });
// };

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let inputValue = elInput.value;

//   let newTodo = {
//     id: todos[todos.length - 1]?.id + 1 || 0,
//     title: inputValue,
//     isCompleted: false,
//   };

//   todos.push(newTodo);

//   elList.innerHTML = null;
//   elInput.value = null;

//   renderTodos(todos, elList);
// });
