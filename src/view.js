import {newTaskForm} from "./form.js";
import {listItemBuilder} from "./listItemBuilder";

export class View {
    constructor(controller) {
        this.root = document.getElementById('root');
        this.controller = controller;
        this.newTaskForm = newTaskForm;
        this.init();
    }

    init() {
        this.newTaskButton = document.createElement('button');
        this.newTaskButton.textContent = 'NEW TASK';
        this.newTaskButton.setAttribute('type', 'button');
        this.newTaskButton.setAttribute('id', 'newTaskButton');
        this.root.appendChild(this.newTaskButton);
        this.newTaskButton.addEventListener('click', (event) => {
            this.newTaskForm();
            this.formSubmission();
        });
        this.displayTasks();
        this.delete();
    }

    formSubmission() {
        const form = document.getElementById('newTaskForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const title = document.querySelector('#title').value;
            const priority = document.querySelector('#priority').value;
            const details = document.querySelector('#details').value;
            this.controller.formDataToModel(title, details, priority);
            window.location.reload();
        });
    }

    displayTasks() {
        let tasksList = document.createElement('ul');
        Object.keys(localStorage).forEach((key) => {
            tasksList.appendChild(listItemBuilder(JSON.parse(localStorage.getItem(key))));
        })
        this.root.appendChild(tasksList);
    }

    delete() {
        const sendTaskID = (deleteButton) => {
            const taskID = deleteButton.target.id.slice(7);
            this.controller.deleteTask(taskID);
        };

        document.querySelectorAll('.deleteButton').forEach((deleteButton) => {
            deleteButton.addEventListener('click', sendTaskID);
        });
    }
}
