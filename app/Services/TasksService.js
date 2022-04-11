import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState, loadState } from "../Utils/LocalStorage.js";

class TasksService {

  markComplete(id) {
    let foundTask = ProxyState.tasks.find(t => t.id == id)
    if (foundTask.completed) {
      foundTask.completed = false
      saveState()
    } else {
      foundTask.completed = true
      saveState()
    }
    console.log(foundTask)
    ProxyState.tasks = ProxyState.tasks
    ProxyState.on('tasks', saveState)
    saveState()
    // Save state is not working............
  }

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