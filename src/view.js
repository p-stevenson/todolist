import {newTaskForm} from "./form.js";

export class View {
    constructor() {
        this.root = document.getElementById('root');
        this.newTaskForm = newTaskForm;
        this.newTaskButton = document.createElement('button');
        this.newTaskButton.textContent = 'NEW TASK';
        this.newTaskButton.setAttribute('type', 'button');
        this.newTaskButton.setAttribute('id', 'newTaskButton');
        this.root.appendChild(this.newTaskButton);
    }

    formSubmission() {
        document.getElementById('newTaskForm').onsubmit = function(e) {
            e.preventDefault();
            localStorage['title'] = document.querySelector('#title').value;
            localStorage['priority'] = document.querySelector('#priority').value;
            console.log(localStorage);
        }
    }
}



