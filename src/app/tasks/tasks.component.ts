import { Component, OnInit } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  inputText: string = '';
  tasks: Task[] = [];

  ngOnInit() {
    this.loadTasksFromLocalStorage();
  }

  addTask() {
    if (this.inputText.trim() !== "") {
      const newTask: Task = {
        id: Date.now(),
        title: this.inputText.trim(),
        completed: false
      };
      this.tasks.push(newTask);
      this.saveTasksToLocalStorage();
      this.inputText = '';
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.saveTasksToLocalStorage();
    }
  }

  clearAllTasks() {
    this.tasks = [];
    this.saveTasksToLocalStorage();
  }

  private loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
