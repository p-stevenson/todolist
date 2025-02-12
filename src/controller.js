export class Controller {
    constructor(model) {
        this.model = model;
    }

    formDataToModel(title, description, notes, priority, project, dueDate) {
        this.model.createTask(title, description, notes, priority, project, dueDate);
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