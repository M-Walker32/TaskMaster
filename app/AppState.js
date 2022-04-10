import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Note } from "./Models/Note.js"
import { Task } from "./Models/Task.js"

// let note1 = new Note({ name: 'this is one', color: "forest" })
// let note2 = new Note({ name: 'this is two', color: "peachy" })
// let note3 = new Note({ name: 'this is three', color: "sage" })

// let task1 = new Task({ name: "task at hand", noteId: note1.id })
// let task2 = new Task({ name: "task at hand2", noteId: note2.id })
// let task3 = new Task({ name: "task at hand3", noteId: note3.id })

class AppState extends EventEmitter {
  /** @type {import('./Models/Note').Note[]} */
  notes = []
  /** @type {import('./Models/Task').Task[]} */
  tasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
