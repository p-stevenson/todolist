export class Model {
    constructor() {
        this.tasks = [];

// ------ PROJECTS RELATED STUFF FOR IMPLEMENTING LATER -----
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

    editTask(uuid, details, priority, project) {
        const selectedTask = this.tasks[this.getTaskIndex(uuid)];
        selectedTask['details'] = details;
        selectedTask['priority'] = priority;
        selectedTask['project'] = project;
    }
// ------ PROJECTS RELATED STUFF FOR IMPLEMENTING LATER -----
//    addToProject(title = 'default') {
//        let currentTask = this.tasks[this.tasks.length - 1];
//        this.projects['default']["tasks"].push(currentTask);
//    }
}