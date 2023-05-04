import './styles.css';
import ManageTasks from '../modules/manage_tasks';

const toDoList = document.getElementById('to-do-list');
const toDoForm = document.getElementById('to-do-form');
const toDoInput = document.getElementById('to-do-input');

const taskManager = new ManageTasks([]);

function populateTaskList(arr) {
  arr.forEach((task) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('to-do-item');
    toDoItem.innerHTML = `
    <input type="checkbox" class="check-button" />
    <span class="task-description" contenteditable="true">${task.description}</span>
    <span class="fas fa-ellipsis-v"></span>
    <span class="fas fa-trash trash-icon hide"></span>
    `;
    toDoList.appendChild(toDoItem);

    const taskDescription = toDoItem.querySelector('.task-description');

    // Save edited task on enter key press
    taskDescription.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const { index } = task; // object destructuring due to ESLint
        const newDescription = taskDescription.textContent.trim().substring(2);
        taskManager.editTask(index, newDescription);
        // Remove focus from the edited element
        taskDescription.blur();
      }
    });
    
  });
}

populateTaskList(taskManager.taskArr);
