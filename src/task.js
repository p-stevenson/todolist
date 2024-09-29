// TODO Figure out Task class structure, write it's methods first.
// Ignore Project and Todo classes until Task is fleshed out.

class Task {
    #uuid = crypto.randomUUID();
    #status = 'open';
    tags = [];
    details = '';
    priority = '';
    percentageComplete = 0;

    constructor(type, title) {
        this.type = type;
        this.title = title;
    }
    get uuid() {
        console.log(this.#uuid);
    }
}

class Project extends Task {
    #checklist = [];

    get checklist() {
        return this.#checklist;
    }

}

class Todo extends Task {
    #parent = '';
    #dueDate = 0;
    constructor(type, title, isSubTask) {
        super(type, title);
        this.isSubTask = isSubTask;
    }

    get parent() {
        return this.#parent;
    }

    set parentUUID(parentUUID) {
        this.#parent = parentUUID;
        console.log(this.#parent);
    }
}
const firstProject = new Project('project', 'firstProject');
const firstTodo = new Todo('todo', 'firstTodo', true);


console.log(firstProject.uuid);
console.log(firstProject.checklist);
console.log(firstTodo.type);
console.log(firstTodo.isSubTask);
console.log(firstTodo.uuid);
firstTodo.parentUUID = firstProject.uuid;
console.log(firstTodo.parent)


