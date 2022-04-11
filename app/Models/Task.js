import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.completed = false
    this.noteId = data.noteId
  }

  get TaskTemplate() {
    return /*html*/`
    <div class="d-flex align-items-center">
    <input id="checktask" type="checkbox" ${this.completed == true ? 'checked':''} class="m-1" onclick="app.tasksController.markComplete('${this.id}')">
      <label for="checkbox">${this.name}</label>
      <i class="mdi mdi-trash-can selectable" onclick="app.tasksController.removeTask('${this.id}')"></i>
    </div>
    `
  }
}

// onclick= call a method in task controller and service 

// 