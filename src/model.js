export class Model {
    constructor() {
    }

    createTask(title, description, details, priority = 'low', project, type = 'todo') {
        let temp = {
            id: crypto.randomUUID(),
            type: type,
            title: title,
            description: description,
            details: details,
            priority: priority,
            project: project,
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

    editTask(taskID) {
        let temp = JSON.parse(localStorage.getItem(taskID));
        temp['id'] = taskID;
        temp['type'] = 'todo';
        temp['title'] = prompt('Enter new task title:');
        temp['description'] = prompt('Enter new task description:');
        temp['details'] = prompt('Enter new task details:');
        temp['priority'] = temp['priority'];
        temp['project'] = temp['project'];
        localStorage.setItem(temp['id'], JSON.stringify(temp));
    }
}