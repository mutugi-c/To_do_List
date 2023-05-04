class ManageTasks {
  constructor() {
    this.taskArr = this.loadTasksFromLocalStorage();
  }

  addTask(taskDescrption) {
    const newTask = {
      description: taskDescrption,
      completed: false,
      index: this.taskArr.length + 1,
    };

    this.taskArr.push(newTask);
    this.storeTasksInLocalStorage();
  }

  removeTask(index) {
    this.taskArr.splice(index, 1);

    // Update remaining properties' indices
    this.taskArr.forEach((task, i) => {
      task.index = i + 1;
    });
    this.storeTasksInLocalStorage();
  }
}

