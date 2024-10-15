import {newTaskForm} from "./form.js";

export class View {
    constructor() {
        this.root = document.getElementById('root');
        this.newTaskForm = newTaskForm;
    }

    newTaskButton() {
        const newTaskButton = document.createElement('button');
        newTaskButton.textContent = 'NEW TASK';
        newTaskButton.setAttribute('type', 'button');
        newTaskButton.setAttribute('id', 'newTaskButton');
        this.root.appendChild(newTaskButton);
    }

    createListContainer(project = 'default') {
        const container = document.createElement('div');
        container.setAttribute('id', project)   
        container.setAttribute('class', 'listContainer')
        this.root.appendChild(container);
    }

}



