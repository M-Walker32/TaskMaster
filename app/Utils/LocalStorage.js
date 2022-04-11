
import { ProxyState } from "../AppState.js"
import { Note } from "../Models/Note.js"
import { Task } from "../Models/Task.js"

export function saveState() {
  let data = {
    notes: ProxyState.notes,
    tasks: ProxyState.tasks
  }
  window.localStorage.setItem('Notes', JSON.stringify(data))
}

export function loadState() {
  let data = window.localStorage.getItem('Notes')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.notes = obj.notes.map(n => new Note(n))
    ProxyState.tasks = obj.tasks.map(t => new Task(t))
  }
}