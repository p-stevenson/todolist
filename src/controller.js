import {View} from "./view";
import {Model} from "./model";

export class Controller {
    constructor() {
        this.view = new View(this);
        this.model = new Model();
    }

    formDataToModel(title, description, details, priority, project) {
        this.model.createTask(title, description, details, priority, project);
    }

    deleteTask(taskID) {
        this.model.deleteTask(taskID);
    }

    editTask(taskID) {
        this.model.editTask(taskID);
    }
}