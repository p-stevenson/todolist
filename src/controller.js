import {View} from "./view";
import {Model} from "./model";

export class Controller {
    constructor () {
        this.view = new View(this);
        this.model = new Model();
    }

    formDataToModel(title, details, priority) {
        this.model.addTask(title, details, priority);
        //CHECK TO SEE IF TASK WAS ACTUALLY ADDED
        console.log(this.model.tasks);
    }
}