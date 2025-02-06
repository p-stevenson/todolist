export class Model {
    constructor() {
    }

    createTask(title, details, priority = 'low', project = 'default', type = 'todo') {
        let temp = {
            id: crypto.randomUUID(),
            type: type,
            title: title,
            details: details,
            priority: priority,
            project: project,
        };
        localStorage.setItem(temp["id"], JSON.stringify(temp));
    }

    deleteTask(taskID) {
        localStorage.removeItem(taskID);
        window.location.reload();
    }

// TODO methods below need to be updated to work with local storage.
//
//    editTask(uuid, details, priority, project) {
//        const selectedTask = this.tasks[this.getTaskIndex(uuid)];
//        selectedTask['details'] = details;
//        selectedTask['priority'] = priority;
//        selectedTask['project'] = project;
//    }

    editTask(taskID) {
        let temp = JSON.parse(localStorage.getItem(taskID));
        temp['id'] = taskID;
        temp['type'] = 'todo';
        temp['title'] = prompt('Enter new task title:');
        temp['details'] = prompt('Enter new task details:');
        temp['priority'] = temp['priority'];
        temp['project'] = temp['project'];
        localStorage.setItem(temp['id'], JSON.stringify(temp));
        console.log(localStorage);
    }
}