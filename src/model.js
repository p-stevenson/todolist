export class Model {
    constructor() {
        this.tasks = [];
        this.projects = {
            default: {
                id: crypto.randomUUID(),
                title: 'default',
                tasks: [],
                percentageComplete: 0,
            },
       };
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
        this.addToProject()
    }
    addToProject(title = 'default') {
        let currentTask = this.tasks[this.tasks.length - 1];
        this.projects['default']["tasks"].push(currentTask);
    }
}