import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  addTask(taskFormData) {
    const task = new Task(taskFormData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }
  removeTask(id) {
    const tasks = ProxyState.tasks.filter(t => t.id !== id)
    ProxyState.tasks = tasks
  }
}

export const tasksService = new TasksService();

