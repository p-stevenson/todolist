import {newTaskForm} from "./form.js";
import {createListItem, createElement} from "./helpers.js";

export class View {
    constructor(controller) {
        this.root = document.getElementById('root');
        this.controller = controller;
        this.newTaskForm = newTaskForm;
        this.init();
    }

    init() {
        this.newTaskButton = createElement('button', {
            'type': 'button',
            'id': 'newTaskButton',
        },['NEW TASK']);
        this.root.appendChild(this.newTaskButton);
        this.newTaskButton.addEventListener('click', (event) => {
            if(! document.getElementById('newTaskForm')) {
                this.openForm();
                this.closeForm();
        }
    });
        this.displayTasks();
        this.getButtonType();
    }

    openForm() {
        this.newTaskForm();
        this.formSubmission();
        document.getElementById("newTaskForm").style.display = "block";
      }
      
    closeForm() {
        const closeButton = document.querySelector('.cancel');
        closeButton.addEventListener('click', () => {
            document.getElementById("newTaskForm").style.display = "none";
            window.location.reload();
        },{once: true});
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
        },{once: true});
    }

    displayTasks() {
        let tasksList = document.createElement('ul');
        Object.keys(localStorage).forEach((key) => {
            tasksList.appendChild(createListItem(JSON.parse(localStorage.getItem(key))));
        })
        this.root.appendChild(tasksList);
    }

    getButtonType() {
        document.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', (e) => {
                switch (e.target['className']) {
                    case 'deleteButton':
                        this.delete(e);
                        break;
                    case 'editButton':
                        this.edit(e);
                        break;
                }
            })
        })
    }

    delete(e) {
        //the slice is to remove the 'delete-' tag at beggining of button ID
        this.controller.deleteTask(e.target['id'].slice(7));
    }

    edit(e) {
       this.controller.editTask(e.target['id'].slice(5));
    }


}
