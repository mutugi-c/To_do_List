import './styles.css';
import ManageTasks from './modules/manage_tasks.js';
import toggleCompleted from './modules/toggle_completed.js';
import clearCompleted from './modules/clear_completed.js';

const toDoList = document.getElementById('to-do-list');
const toDoForm = document.getElementById('to-do-form');
const toDoInput = document.getElementById('to-do-input');
const taskManager = new ManageTasks([]);

function createToDoItem(task) {
  const toDoItem = document.createElement('li');
  toDoItem.classList.add('to-do-item');
  toDoItem.innerHTML = `
    <input type="checkbox" class="check-button" />
    <span class="task-description" contenteditable="true">${task.description}</span>
    <span class="fas fa-ellipsis-v"></span>
    <span class="fas fa-trash trash-icon hide"></span>
  `;
  return toDoItem;
}

function addTaskDescriptionEventListener(toDoItem, task) {
  const taskDescription = toDoItem.querySelector('.task-description');
  taskDescription.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const { index } = task;
      const newDescription = taskDescription.textContent.trim().substring(2);
      taskManager.editTask(index, newDescription);
      taskDescription.blur();
    }
  });
}

function addActiveEventListener(toDoItem) {
  toDoItem.addEventListener('click', () => {
    if (!toDoItem.classList.contains('active')) {
      document.querySelectorAll('.to-do-item').forEach((item) => {
        item.classList.remove('active');
        item.querySelector('.fa-ellipsis-v').classList.remove('hide');
        item.querySelector('.trash-icon').classList.add('hide');
        item.style.background = '';
      });

      toDoItem.classList.add('active');
      toDoItem.querySelector('.fa-ellipsis-v').classList.add('hide');
      toDoItem.querySelector('.trash-icon').classList.remove('hide');
      toDoItem.style.background = '#fffbc8';

      const taskDescription = toDoItem.querySelector('.task-description');
      taskDescription.focus();
    }
  });
}

function addTrashIconEventListener(toDoItem, task) {
  toDoItem.querySelector('.trash-icon').addEventListener('click', () => {
    taskManager.removeTask(task.index);
    toDoItem.remove();
  });
}

function addIndexAttribute(toDoItem, task) {
  toDoItem.dataset.index = taskManager.taskArr.indexOf(task);
}

function populateTaskList(arr) {
  arr.forEach((task) => {
    const toDoItem = createToDoItem(task);
    toDoList.appendChild(toDoItem);
    addTaskDescriptionEventListener(toDoItem, task);
    addActiveEventListener(toDoItem);
    addTrashIconEventListener(toDoItem, task);
    addIndexAttribute(toDoItem, task);
  });
}

// Add event listener for submission
toDoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = toDoInput.value.trim();
  if (taskDescription !== '') {
    taskManager.addTask(taskDescription);

    toDoInput.value = '';
    const newTask = [taskManager.taskArr[taskManager.taskArr.length - 1]];
    populateTaskList(newTask);
  }
});

// Add event listeners for completed clear button
const clearCompletedButton = document.getElementById('clear-completed');
clearCompletedButton.addEventListener('click', () => {
  clearCompleted(toDoList, taskManager);
});

toggleCompleted(toDoList, taskManager);

populateTaskList(taskManager.taskArr);
