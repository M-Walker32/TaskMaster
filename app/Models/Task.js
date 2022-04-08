import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.noteId = data.noteId
    // how do you connect the note ID to the note?? is it magic??????
  }

  get TaskTemplate() {
    return /*html*/`
    <div class="task d-flex">
                <input type="checkbox">
                <span class="checkmark"></span>
                <p>${this.name}</p>
              </div>
    `
  }
}