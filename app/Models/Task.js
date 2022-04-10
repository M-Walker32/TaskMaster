import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.noteId = data.noteId
  }

  get TaskTemplate() {
    return /*html*/`
    <div class="tasks d-flex">
      <input type="checkbox">
      <span class="checkmark"></span>
      <p>${this.name}</p>
      <i class="mdi mdi-trash-can selectable" onclick="app.tasksController.removeTask('${this.id}')"></i>
     </div>
    `
  }
}