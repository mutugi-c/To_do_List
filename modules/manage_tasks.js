class ManageTasks {
  constructor() {
    this.taskArr = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(description) {
    const newTask = {
      description,
      completed: false,
      index: this.taskArr.length + 1,
    };
    this.taskArr.push(newTask);
    this.saveTasks();
  }

  removeTask(index) {
    this.taskArr.splice(index, 1);
    this.updateIndexes();
    this.saveTasks();
  }

  editTask(index, newDescription) {
    if (this.taskArr[index]) {
      this.taskArr[index].description = newDescription;
      this.saveTasks();
    }
  }

  completeTask(index, completed) {
    this.taskArr[index].completed = completed;
    this.saveTasks();
  }

  updateIndexes() {
    this.taskArr.forEach((task, i) => {
      task.index = i + 1;
    });
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.taskArr));
  }
}

export default ManageTasks;
