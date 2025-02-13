import {createElement} from './helpers.js'; 
const root = document.getElementById('root');

const newTaskForm = () => {
    
    const form = createElement('form',{id: 'newTaskForm'})
    root.appendChild(form);
    
    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    
    const legend = createElement('legend', {}, ['New Task: ']);
    fieldset.append(legend);
    
    const titleWrapper = document.createElement('p');
    fieldset.appendChild(titleWrapper);
    const titleLabel = createElement('label', {for: 'title'}, ['Task: ']);
    titleWrapper.appendChild(titleLabel);
    const titleInput = createElement('input', {
        type: 'text', 
        name: 'title', 
        id: 'title', 
        placeholder: 'Task Name',
        required: true,
    });
    titleWrapper.appendChild(titleInput);   
    
    const descriptionWrapper = document.createElement('p');
    fieldset.appendChild(descriptionWrapper);
    const descriptionLabel = createElement('label', {for: 'description'}, ['Description: ']);
    descriptionWrapper.appendChild(descriptionLabel);
    const descriptionInput = createElement('input', {
        type: 'text', 
        name: 'description', 
        id: 'description', 
        placeholder: 'Task Description'});
    descriptionWrapper.appendChild(descriptionInput);

    const projectWrapper = document.createElement('p');
    fieldset.appendChild(projectWrapper);
    const projectLabel = createElement('label', {for: 'project'}, ['Project: ']);
    projectWrapper.appendChild(projectLabel);
    const projectInput = createElement('input', {
        type: 'text', 
        name: 'project', 
        id: 'project', 
        placeholder: 'Project Name'});
    projectWrapper.appendChild(projectInput);
        
    const priorityWrapper = document.createElement('p');
    fieldset.appendChild(priorityWrapper);
    const priorityLabel = createElement('label', {for: 'priority'}, ['Priority: ']);
    priorityWrapper.appendChild(priorityLabel);
    const prioritySelector = createElement('select', {
        name: 'priority',
        id: 'priority', 
        autocomplete: 'off',
        required: true,
    }, []);
    priorityWrapper.appendChild(prioritySelector);
    const priorities = ['none', 'low', 'medium', 'high'];
    priorities.forEach(value => {
        const option = createElement('option', {
            value: value,
        }, [value]);
        prioritySelector.appendChild(option);
    });

    const notesWrapper = document.createElement('p');
    fieldset.appendChild(notesWrapper);
    const notesLabel = createElement('label', {for: 'notes'}, ['Notes: ']);
    notesWrapper.appendChild(notesLabel);
    const notesInput = createElement('textarea', {
        id: 'notes', 
        name: 'notes', 
        rows: 10, 
        cols: 30, 
        placeholder: 'Notes...'},[]);
    notesWrapper.appendChild(notesInput);

    const dueDateWrapper = document.createElement('div');
    fieldset.appendChild(dueDateWrapper);
    const dueDateLabel = createElement('label', {for: 'dueDate'}, ['Due Date: ']);
    dueDateWrapper.appendChild(dueDateLabel);
    const today = new Date().toISOString().split('T')[0];
    const dueDate = createElement('input', {
        type: 'date',
        id: 'dueDate',
        name: 'dueDate',
        required: true,
        min: today,
        }, []);
    dueDateWrapper.appendChild(dueDate);


    const submitButton = createElement('button', {type: 'submit'}, ['SUBMIT']);
    fieldset.appendChild(submitButton);
    const closeButton = createElement('button', {
        type: 'button',
        class: 'cancel'}, ['CANCEL']);
    fieldset.appendChild(closeButton);
}

export {newTaskForm}
