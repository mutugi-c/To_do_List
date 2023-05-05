// Update completed status
const toggleCompleted = (toDoList, taskManager, index) => {
    const toDoItem = toDoList.querySelector(`[data-index="${index}"]`);
    if (!toDoItem) {
      return;
    }
    const checkButton = toDoItem.querySelector('.check-button');
    if (checkButton.checked) {
      toDoItem.classList.add('completed');
      taskManager.completedTask(index, true);
      taskManager.storeTasksInLocalStorage();
    } else {
      toDoItem.classList.remove('completed');
      taskManager.completedTask(index, false);
      taskManager.storeTasksInLocalStorage();
    }
  };

  export {toggleCompleted};
