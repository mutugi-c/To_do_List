const clearCompleted = (toDoList, manageTasks) => {
  const toDoItems = toDoList.querySelectorAll('.to-do-item');
  toDoItems.forEach((toDoItem) => {
    const checkButton = toDoItem.querySelector('.check-button');
    if (checkButton.checked) {
      const index = toDoItem.dataset.index - 1;
      manageTasks.removeTask(index);
      toDoItem.remove();
    }
  });
};

export default clearCompleted;
