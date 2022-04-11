import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.check = 0
    this.noteId = data.noteId
  }

  get TaskTemplate() {
    return /*html*/`
    <div class="d-flex align-items-center">
    <input id="checktask" type="checkbox" checked class="checktask m-1">
      <label for="checkbox">${this.name}</label>
      <i class="mdi mdi-trash-can selectable" onclick="app.tasksController.removeTask('${this.id}')"></i>
    </div>
    `
  }
}

// onclick="app.tasksController.save(${this.id})"

// 