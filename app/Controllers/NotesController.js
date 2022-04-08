import { ProxyState } from "../AppState.js";
// import { Note } from "../Models/Note.js";
import { notesService } from "../Services/NotesService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _drawNotes() {
  let notes = ProxyState.notes;
  let notesTemplate = ''
  notes.forEach(n => notesTemplate += n.NoteTemplate)
  document.getElementById("note").innerHTML = notesTemplate
}

//Public
export class NotesController {
  constructor() {
    ProxyState.on("notes", _drawNotes);
    // ProxyState.on("tasks", _drawTasks);
    _drawNotes()
  }

  addNote() {
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
      formElem.reset()
    }
    catch {
      console.log('error')
    }
  }

  async removeNote(id) {
    const yes = await Pop.confirm('Remove Note')
    if (yes) {
      notesService.removeNote(id)
    }
  }
}