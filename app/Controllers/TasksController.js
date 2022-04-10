import { ProxyState } from "../AppState.js";
// import { Task } from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";
// import {loadState, saveState} "../Utils/WHAT_GOES_HERE" 
import { Pop } from "../Utils/Pop.js";


//Private
function _drawTasks() {
  let tasks = ProxyState.tasks
  let tasksTemplate = ''
  tasks.forEach(t => tasksTemplate += t.TaskTemplate)
  document.getElementById("task").innerHTML = tasksTemplate
}

//Public
export class TasksController {
  constructor() {
    // ProxyState.on("tasks", _drawTasks);
    //   // ProxyState.on("notes", _drawNotes);
    //   // ProxyState.on('tasks', saveState) -- this for local storage
    // _drawTasks()
  }

  addTask(noteId) {
    // console.log(noteId)
    window.event.preventDefault()
    try {
      // debugger
      event.preventDefault()
      const form = event.target
      const taskFormData = {
        // @ts-ignore
        name: form.newtask.value,
        noteId
      }
      tasksService.addTask(taskFormData)
      // @ts-ignore
      // form.reset()
    }
    catch {
      console.log('error')
    }
  }

  async removeTask(id) {
    const yes = await Pop.confirm('Remove Task')
    if (yes) {
      tasksService.removeTask(id)
    }
  }
}