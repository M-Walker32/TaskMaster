import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  addTask(taskFormData) {
    const task = new Task(taskFormData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }
  // removeNote(id) {
  //   const notes = ProxyState.notes.filter(n => n.id !== id)
  //   ProxyState.notes = notes
  // }
}

export const tasksService = new TasksService();

