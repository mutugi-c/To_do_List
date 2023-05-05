// Update completed status
const toggleCompleted = (toDoList, taskManager, index) => {
  const toDoItem = toDoList.querySelector(`[data-index="${index}"]`);
  if (!toDoItem) {
    return;
  }
  const checkButton = toDoItem.querySelector('.check-button');
  if (checkButton.checked) {
    toDoItem.classList.add('completed');
    taskManager.completeTask(index, true);
    taskManager.saveTasks();
  } else {
    toDoItem.classList.remove('completed');
    taskManager.completeTask(index, false);
    taskManager.saveTasks();
  }
};

export default toggleCompleted;
