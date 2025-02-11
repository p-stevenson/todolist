export class Controller {
    constructor(model) {
        this.model = model;
    }

    formDataToModel(title, description, details, priority, project) {
        this.model.createTask(title, description, details, priority, project);
    }

    deleteTask(taskID) {
        console.log('here')
        this.model.deleteTask(taskID);
    }

    editTask(taskID) {
        this.model.editTask(taskID);
    }

    getTasks() {
        // Return statement is required because getTasks() retrieves data where 
        // the other methods in this class do not.
        return this.model.getTasks();
    }
}