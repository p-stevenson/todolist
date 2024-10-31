export class Model {
    constructor() {
        this.tasks = [];
    }

    addTask(type, title, details, priority = 'low', project ='default') {
        this.tasks.push({
            id: crypto.randomUUID(),
            type: type,
            title: title,
            details: details,
            priority: priority,
            project: project,
        });
    }

    getTaskIndex(uuid) {
        return (this.tasks.findIndex(task => task.id === uuid));
    }

    removeTask(uuid) {
        this.tasks.splice(this.getTaskIndex(uuid), 1);
    }

    editTask(uuid, details, priority, project) {
        const selectedTask = this.tasks[this.getTaskIndex(uuid)];
        selectedTask['details'] = details;
        selectedTask['priority'] = priority;
        selectedTask['project'] = project;
    }
}