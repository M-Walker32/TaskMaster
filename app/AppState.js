import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Note } from "./Models/Note.js"
import { Task } from "./Models/Task.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Note').Note[]} */
  notes = [
    new Note({
      name: 'Groceries',
      color: "forest"
    }),
    new Note({
      name: 'Groceries',
      color: "mustard"
    }),
    new Note({
      name: 'Groceries',
      color: "peachy"
    }),
  ]
  /** @type {import('./Models/Task').Task[]} */
  tasks = [
    new Task({
      name: 'Eat a sandwhich',
      noteId: ""
    }),
    new Task({
      name: 'Eat a sandwhich',
      noteId: ""
    }),
    new Task({
      name: 'Eat a sandwhich',
      noteId: ""
    }),

  ]

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
