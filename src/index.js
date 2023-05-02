import './styles.css';

const taskList = [
  { description: 'Go to the movies', completed: false },
  { description: 'Play football', completed: false },
  { description: 'Drink milk', completed: false },
  { description: 'Visit friends', completed: false },
]

const toDoList = document.getElementById('to-do-list');

function populateTaskList(arr) {
  arr.forEach((task) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('to-do-item');
    toDoItem.innerHTML = `
    <input type='checkbox' class='check-button' />
    <span class='task-description' contenteditable='true'>${task.description}</span>
    <span class='fas fa-ellipsis-v'></span>
    <span class='fas fa-trash trash-icon hide'></span>
    `;
    toDoList.appendChild(toDoItem);
  });
}

populateTaskList(taskList);
