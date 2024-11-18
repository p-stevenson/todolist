import {newTaskForm} from "./form.js";

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

    listItemBuilder(currentTask) {
        const listItem = this.createListItem(currentTask);
        const taskDetails = this.addTaskDetails(currentTask);
        const deleteButton = this.addDeleteButton(currentTask);
        listItem.appendChild(taskDetails);
        listItem.appendChild(deleteButton);
        return listItem;
    }

    createListItem(currentTask) {
        const listItem = document.createElement("li");
        listItem.setAttribute('id', currentTask['id']);
        listItem.setAttribute('data-type', currentTask['type']);
        listItem.setAttribute('data-priority', currentTask['priority']);
        listItem.setAttribute('data-project', currentTask['project']);
        listItem.textContent = currentTask['title'];
        return listItem;
    }

    addTaskDetails(currentTask) {
        const taskDetails = document.createElement('p');
        taskDetails.textContent = `Details: ${currentTask['details']}`;
        return taskDetails;
    }

    addDeleteButton(currentTask) {
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', `delete-${currentTask['id']}`);
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.textContent = 'del';
        return deleteButton;
    }

    displayTasks() {
        let tasksList = document.createElement('ul');
        Object.keys(localStorage).forEach((key) => {
            tasksList.appendChild(this.listItemBuilder(JSON.parse(localStorage.getItem(key))));
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
