import {createElement} from './helpers.js'; 
const root = document.getElementById('root');

const newTaskForm = () => {
    
    const form = createElement('form',{id: 'newTaskForm'},[])
    root.appendChild(form);
    
    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    
    const legend = createElement('legend', {}, ['New Task']);
    fieldset.append(legend);
    
    const titleWrapper = document.createElement('p');
    fieldset.appendChild(titleWrapper);
    const titleLabel = createElement('label', {for: 'title'}, ['Task:']);
    titleWrapper.appendChild(titleLabel);
    const titleInput = createElement('input', {
        type: 'text', 
        name: 'title', 
        id: 'title', 
        placeholder: 'Task Name'});
    titleLabel.appendChild(titleInput);
        
    const priorityWrapper = document.createElement('p');
    fieldset.appendChild(priorityWrapper);
    const priorityLabel = createElement('label', {for: 'priority'}, ['Priority:']);
    priorityWrapper.appendChild(priorityLabel);
    const prioritySelector = createElement('select', {
        name: 'priority',
        id: 'priority', 
        autocomplete: 'off'}, []);
    priorityWrapper.appendChild(prioritySelector);
    const priorities = ['low', 'medium', 'high'];
    priorities.forEach(value => {
        const option = createElement('option', {value: value}, [value]);
        prioritySelector.appendChild(option);
    });

    const detailsWrapper = document.createElement('p');
    fieldset.appendChild(detailsWrapper);
    const detailsLabel = createElement('label', {for: 'details'}, ['Details:']);
    detailsWrapper.appendChild(detailsLabel);
    const detailsInput = createElement('textarea', {
        id: 'details', 
        name: 'details', 
        rows: 10, 
        cols: 30, 
        placeholder: 'Task details...'},[]);
    detailsLabel.appendChild(detailsInput);

    const submitButton = createElement('button', {type: 'submit'}, ['SUBMIT']);
    fieldset.appendChild(submitButton);
}

export {newTaskForm}
