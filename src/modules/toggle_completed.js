const toggleCompleted = (toDoList, taskManager, index) => {
  const toDoItem = toDoList.querySelector(`[data-index='${index}']`);
  if (!toDoItem) {
    return;
  }
  const checkButton = toDoItem.querySelector('.check-button');
  const completed = checkButton.checked;
  if (completed) {
    toDoItem.classList.add('completed');
  } else {
    toDoItem.classList.remove('completed');
  }
  taskManager.completeTask(index, completed);
  taskManager.saveTasks();
};

export default toggleCompleted;
