import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState, loadState } from "../Utils/LocalStorage.js";

class TasksService {

  markComplete(id) {
    // debugger
    let foundTask = ProxyState.tasks.find(t => t.id == id)
    console.log(foundTask)
    if (foundTask.completed) {
      foundTask.completed = false
    } else {
      foundTask.completed = true
    }
    console.log(foundTask)
    ProxyState.tasks = ProxyState.tasks
    // ProxyState.on('tasks', saveState)
    // saveState()
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