export class Model {
    constructor() {
    }

    createTask(title, description, notes, priority = 'low', project, dueDate ) {
        let temp = {
            id: crypto.randomUUID(),
            title: title,
            description: description,
            notes: notes,
            priority: priority,
            project: project,
            dueDate: dueDate,
        };
        localStorage.setItem(temp["id"], JSON.stringify(temp));
    }

    getTasks() {
        let tasks = [];
        Object.keys(localStorage).forEach((key) => {
            tasks.push(JSON.parse(localStorage.getItem(key)));
        });
        return tasks;
    }

    deleteTask(taskID) {
        localStorage.removeItem(taskID);
        window.location.reload();
    }

    getTask(taskID) {
        let task = JSON.parse(localStorage.getItem(taskID));
        return task;
    }

}