import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
// import { Task } from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js";

//Public
export class TasksController {

  // save(id) {
  //   // let checked = id
    
  //   loadState()
  // }

  addTask(noteId) {
    // console.log(noteId)
    window.event.preventDefault()
    try {
      // debugger
      event.preventDefault()
      const form = window.event.target
      const taskFormData = {
        // @ts-ignore
        name: form.newtask.value,
        // @ts-ignore
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
    const yes = await Pop.confirm('Remove Task?')
    if (yes) {
      tasksService.removeTask(id)
    }
  }
}