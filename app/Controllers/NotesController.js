import { ProxyState } from "../AppState.js";
// import { Note } from "../Models/Note.js";
import { notesService } from "../Services/NotesService.js";
import { Pop } from "../Utils/Pop.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Task } from "../Models/Task.js";
import { Note } from "../Models/Note.js";


//Private
function _drawNotes() {
  let notes = ProxyState.notes;
  let notesTemplate = ''
  notes.forEach(n => notesTemplate += n.NoteTemplate)
  document.getElementById("note").innerHTML = notesTemplate
}

// function addCheck(check) {
//   check += 1
//   console.log(check)
//   document.getElementById("checktask").addEventListener
//   ProxyState.on('checktask', addCheck)
//   ProxyState.on('checktask', saveState)
// }


//Public
export class NotesController {
  constructor() {
    ProxyState.on("notes", _drawNotes)
    ProxyState.on("tasks", _drawNotes)
    ProxyState.on('notes', saveState)
    ProxyState.on('tasks', saveState)
    loadState()
    _drawNotes()
  }

  addNote(name) {
    // debugger
    window.event.preventDefault()
    try {
      const form = window.event.target
      const noteFormData = {
        // @ts-ignore
        name: form.name.value,
        // @ts-ignore
        color: form.color.value
      }
      // @ts-ignore
      notesService.addNote(noteFormData)
      // @ts-ignore
      form.reset()
    }
    catch {
      alert('Your note title must be between 3-15 charcters, and you must select a color.')
    }
  }
  async removeNote(id) {
    const yes = await Pop.confirm('Remove Note')
    if (yes) {
      notesService.removeNote(id)
    }
  }
}