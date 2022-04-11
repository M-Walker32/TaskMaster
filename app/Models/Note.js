import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"
import { Task } from "./Task.js"

export class Note {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.completed = 0
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(t => t.noteId == this.id)
    let template = ''
    tasks.forEach(t => template += t.TaskTemplate)
    return template
  }

  get taskCount() {
    let totaltasks = ProxyState.tasks.filter(t => t.noteId == this.id).length
    console.log('Total:', totaltasks)
    return totaltasks
  }
  get checked() {
    let checked = document.querySelectorAll('input[checked]').length
    console.log('checked', checked)
    return checked
  }

  get NoteTemplate() {
    return /*html*/`
    <div class="col-4">
    <div class="card m-3">
      <h5 class="card-header text-light bg-${this.color}">${this.name}
      <span id="checkCount"> ${this.checked} / ${this.taskCount}</span>
      <i class="mdi mdi-trash-can selectable" onclick="app.notesController.removeNote('${this.id}')"></i>
      </h5>
      <div class="card-body">
        <p class="card-text text-wrap" id="task">
        ${this.Tasks}
        </p>
      </div>
      <form onsubmit="app.tasksController.addTask('${this.id}')">
      <div class="m-3 d-flex">
      <input type="text" class="form-control text-wrap m-1" minlength="3" maxlength="50" placeholder="Pet the dog." id="newtask">
      <button class="btn btn-outline-secondary m-1" type="submit" onclick="">+</button>
      </div>
      </form>
    </div>
    </div
    </div>
    `
  }
}
