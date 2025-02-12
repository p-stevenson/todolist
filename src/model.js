export class Model {
    constructor() {
    }

    createTask(title, description, notes, priority = 'low', project, dueDate ) {
        let temp = {
            id: crypto.randomUUID(),
            // type: type,
            title: title,
            description: description,
            notes: notes,
            priority: priority,
            project: project,
            dueDate: dueDate,
        };
        localStorage.setItem(temp["id"], JSON.stringify(temp));
        console.log(localStorage)
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
        temp['notes'] = prompt('Enter new task notes:');
        temp['priority'] = temp['priority'];
        temp['project'] = temp['project'];
        localStorage.setItem(temp['id'], JSON.stringify(temp));
    }
}