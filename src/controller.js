import {Task} from './model.js';
import {storage} from './model.js'

class Controller {
    constructor () {
        this.Model = Task;
    }

    newTask(type) {
        storage.push(new this.Model(type));
    }
}

const controller = new Controller();
controller.newTask('todo')
console.log(storage);