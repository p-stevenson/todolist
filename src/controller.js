import {View} from "./view";
import {Model} from "./model";

export class Controller {
    constructor() {
        this.view = new View(this);
        this.model = new Model();
    }

    formDataToModel(title, details, priority) {
        this.model.createTask(title, details, priority);
    }

    deleteTask(taskID) {
        this.model.deleteTask(taskID);
    }
}