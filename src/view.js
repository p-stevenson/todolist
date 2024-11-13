import {newTaskForm} from "./form.js";
export class View {
    constructor(controller) {
        this.root = document.getElementById('root');
        this.controller = controller;
        this.newTaskForm = newTaskForm;
        this.init();
    }

    init() {
        this.displayTasks();
        this.newTaskButton = document.createElement('button');
        this.newTaskButton.textContent = 'NEW TASK';
        this.newTaskButton.setAttribute('type', 'button');
        this.newTaskButton.setAttribute('id', 'newTaskButton');
        this.root.appendChild(this.newTaskButton);
        this.newTaskButton.addEventListener('click', (event) => {
            this.newTaskForm();
            this.formSubmission();
        });
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
            let currentTask = JSON.parse(localStorage.getItem(key));
            tasksList.appendChild(this.listItemBuilder(currentTask));
        })
        this.root.appendChild(tasksList);
    }

    listItemBuilder(currentTask) {
        let listItem = document.createElement("li");
        listItem.setAttribute('id', currentTask['id']);
        listItem.setAttribute('data-type', currentTask['type']);
        listItem.setAttribute('data-priority', currentTask['priority']);
        listItem.setAttribute('data-project', currentTask['project']);
        listItem.textContent = currentTask['title'];
        let currentTaskDetails = document.createElement('p');
        currentTaskDetails.textContent = `Details: ${currentTask['details']}`;
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', `delete-${currentTask['id']}`);
        deleteButton.textContent = 'del';
        listItem.appendChild(currentTaskDetails);
        listItem.appendChild(deleteButton);
        return listItem;
    }
}



//TODO Question: I am not sure how to connect the view and the model via the controller.