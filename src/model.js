export class Model {
    constructor() {
        this.tasks = [];
//        this.projects = {
//            default: {
//                id: crypto.randomUUID(),
//                title: 'default',
//                tasks: [],
//                percentageComplete: 0,
//            },
//       };
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
//        this.addToProject()
    }

    getTaskIndex(uuid) {
        return (this.tasks.findIndex(task => task.id === uuid));
    }

    removeTask(uuid) {
        this.tasks.splice(this.getTaskIndex(uuid), 1);
    }

// ------ FOR LATER -----
//    addToProject(title = 'default') {
//        let currentTask = this.tasks[this.tasks.length - 1];
//        this.projects['default']["tasks"].push(currentTask);
//    }
}