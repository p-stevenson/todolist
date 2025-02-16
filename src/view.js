import {newTaskForm} from "./form.js";
import {createListItem, createElement} from "./helpers.js";

export class View {
    constructor(controller) {
        this.root = document.getElementById('root');
        this.controller = controller;
        this.tasks = this.controller.getTasks();
        this.uniqueProjects = [...new Set(this.tasks.map(task => task.project))]
        this.projects = ['All', ...this.uniqueProjects];
        this.init();
    }

    init() {
        this.addNewTaskButton();
        this.addFilterDropdown();
        this.displayTasks();
        this.getButtonType();
    }

    addNewTaskButton() {
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
    }

    addFilterDropdown () {
        this.filterContainer = createElement('p', {
            'id': 'filterContainer',
        }, ['Projects:'])
        this.root.appendChild(this.filterContainer);
        this.filterSelect = createElement('select', {
            'id': 'filterTaskDropdown',
            'value': 'All',
        });
        this.projects.forEach(project => {
            const option = createElement('option', {
            'value': project
            }, [project]);
            this.filterSelect.appendChild(option);
        })
        this.filterContainer.appendChild(this.filterSelect);
        this.filterSelect.addEventListener('change', (event) => {
            const selectedProject = event.target.value;
            selectedProject === 'All' 
                ? this.displayTasks() 
                : this.displayFilteredTasks(selectedProject);
        });
    }

    openForm() {
        newTaskForm(this.projects);
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
            const currentTaskID = form.getAttribute('data-current-task-id');
            const title = document.querySelector('#title').value;
            const description = document.querySelector('#description').value;
            const notes = document.querySelector('#notes').value;
            const priority = document.querySelector('#priority').value;
            let project = document.querySelector('#project').value;
            if(!project) {
                project = 'default';
            }
            const dueDate = document.querySelector('#dueDate').value;
            this.controller.formDataToModel(currentTaskID, title, description, notes, priority, project, dueDate);
            window.location.reload();
        },{once: true});
    }

    displayTasks() {
        this.clearOldTaskList()
        const tasks = this.controller.getTasks();
        const taskList = document.createElement('ul');
        tasks.forEach((task) => {
            taskList.appendChild(createListItem(task))
            });
        this.root.appendChild(taskList);
    }

    displayFilteredTasks(project) {
        this.clearOldTaskList()
        const tasks = this.controller.getTasks()
        const taskList = document.createElement('ul')
        tasks.forEach((task) => {
            if (task.project === project)
                taskList.appendChild(createListItem(task));
        });
        this.root.appendChild(taskList);
        this.getButtonType();
    }
    
    clearOldTaskList() {
        const oldTaskList = document.querySelector('ul')
        if(oldTaskList) {
            oldTaskList.remove();
        }
    }
    getButtonType() {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => {
                switch (e.target['className']) {
                    case 'deleteButton':
                        this.deleteButton(e);
                        break;
                    case 'editButton':
                        this.editButton(e);
                        break;
                }
            })
        })
    }

    deleteButton(e) {
        //the slice is to remove the 'delete-' tag at beggining of button ID
        this.controller.deleteTask(e.target['id'].slice(7));
    }

    //TODO stop form from adding duplicate task when submitting edited task
    editButton(e) {
        const taskID = e.target.id.slice(5);
        const task = this.controller.editTask(taskID);
        newTaskForm(this.projects, task);
        this.formSubmission();
        this.closeForm();
        this.getButtonType();
        // this.displayTasks();
        document.getElementById("newTaskForm").style.display = "block";
    }
}