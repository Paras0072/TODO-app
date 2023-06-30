// // Selectors
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');
// const categoryInput = document.querySelector('#category-input');
// const dateInput = document.querySelector('#date-input');
// const todoList = document.querySelector('#todo-list');

// // Event Listeners
// todoForm.addEventListener('submit', addTodo);
// todoList.addEventListener('click', deleteTodo);

// // Functions
// function addTodo (event) {
//   event.preventDefault();
//   if (todoInput.value.trim() === '') {
//     alert('Please enter a task!');
//     return;
//   }

//   const todo = document.createElement('li');
//   todo.innerHTML = `
//       <input type='checkbox' id='checkbox' name="checkbox" >
//       <div class="categoryInput">${categoryInput.value}</div>
//       <div class="todoInput">${todoInput.value}</div>
//       <div class="dateInput">${dateInput.value}</div>
//       <button class="delete-button">Delete</button>
//   `;
//   todoList.appendChild(todo);

//   todoInput.value = '';
//   categoryInput.value = '';
//   dateInput.value = '';
// }

// function deleteTodo (event) {
//   if (event.target.classList.contains('delete-button')) {
//     event.target.parentElement.remove();
//   }
// }

console.log('My Script is loaded')
