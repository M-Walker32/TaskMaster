import { NotesController } from "./Controllers/NotesController.js";
import { TasksController } from "./Controllers/TasksController.js"

class App {
  notesController = new NotesController();
  tasksController = new TasksController();
}

window["app"] = new App();
