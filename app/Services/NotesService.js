import { ProxyState } from "../AppState.js";
import { Note } from "../Models/Note.js";

class NotesService {
  addNote(noteFormData) {
    const note = new Note(noteFormData)
    ProxyState.notes = [...ProxyState.notes, note]
  }
  removeNote(id) {
    const notes = ProxyState.notes.filter(n => n.id !== id)
    ProxyState.notes = notes
  }

  addCheck(num, id) {
    const notes = ProxyState.notes.filter(n => n.id !== id)
    const checked = ProxyState.notes.push(num += 1)
    ProxyState.notes = notes
    // let checked = 0
    // checked += 1
  }
}

export const notesService = new NotesService();

