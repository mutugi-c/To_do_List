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
}

