import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.color = data.color
  }

  get NoteTemplate() {
    return /*html*/`
    <div class="col-4">
    <div class="card m-3">
      <h5 class="card-header text-light bg-${this.color}">${this.name}
      <span>0/0</span>
      <i class="mdi mdi-trash-can selectable" onclick="app.notesController.removeNote('${this.id}')"></i>
      </h5>
      <div class="card-body">
        <p class="card-text text-wrap" id="task">
        // tasks go here<br>
        // tasks go here<br>
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
