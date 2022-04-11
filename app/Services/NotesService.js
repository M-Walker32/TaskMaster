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
}

export const notesService = new NotesService();

