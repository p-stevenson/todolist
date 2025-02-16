export class Controller {
    constructor(model) {
        this.model = model;
    }

    formDataToModel(currentTaskID, title, description, notes, priority, project, dueDate) {
        if(!currentTaskID){
            this.model.createTask(title, description, notes, priority, project, dueDate);
        } else {
            this.model.updateTask(currentTaskID, title, description, notes, priority, project, dueDate);
        } 
    }

    deleteTask(taskID) {
        console.log('here')
        this.model.deleteTask(taskID);
    }

    editTask(taskID) {
        return this.model.getTask(taskID);
    }

    getTasks() {
        // Return statement is required because getTasks() retrieves data where 
        // the other methods in this class do not.
        return this.model.getTasks();
    }

}