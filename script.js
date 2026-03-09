const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const listItem = document.createElement('li');

  const textSpan = document.createElement('span');
  textSpan.className = 'todo-text';
  textSpan.textContent = text;
  textSpan.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  listItem.appendChild(textSpan);
  listItem.appendChild(deleteButton);
  todoList.appendChild(listItem);

  todoInput.value = '';
  todoInput.focus();
});
