import {newTaskForm} from "./form.js";
import {createListItem, createElement} from "./helpers.js";

export class View {
    constructor(controller) {
        this.controller = controller;
        this.init();
    }

    init() {
        this.newTaskButton = createElement('button', {
            'type': 'button',
            'id': 'newTaskButton',
        },['NEW TASK']);
        document.getElementById('root').appendChild(this.newTaskButton);
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
        newTaskForm();
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
            const description = document.querySelector('#description').value;
            const priority = document.querySelector('#priority').value;
            const details = document.querySelector('#details').value;
            let project = document.querySelector('#project').value;
            if(!project) {
                project = 'default';
            }
            this.controller.formDataToModel(title,description, details, priority, project);
            window.location.reload();
        },{once: true});
    }

    displayTasks() {
        const tasks = this.controller.getTasks();
        const taskList = document.createElement('ul');
        tasks.forEach((task) => {
            taskList.appendChild(createListItem(task));
        });
        document.getElementById('root').appendChild(taskList);
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
