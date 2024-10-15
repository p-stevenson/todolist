const root = document.getElementById('root');


const newTaskForm = (projects) => {
    console.log('got this far!');
    const form = document.createElement('form');
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'New Task';


    const titleWrapper = document.createElement('p');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('placeholder', 'Task');


    const priorityWrapper = document.createElement('p');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority';

    const prioritySelector = document.createElement('select');
    prioritySelector.setAttribute('name', 'priority');
    prioritySelector.setAttribute('id', 'priority');

    const priorityOption1 = document.createElement('option');
    priorityOption1.setAttribute('value', 'low');
    priorityOption1.textContent = 'low';
    const priorityOption2 = document.createElement('option');
    priorityOption2.setAttribute('value', 'medium');
    priorityOption2.textContent = 'medium';
    const priorityOption3 = document.createElement('option');
    priorityOption3.setAttribute('value', 'high');
    priorityOption3.textContent = 'high';

    const detailsWrapper = document.createElement('p');
    const detailsLabel = document.createElement('label');
    detailsLabel.setAttribute('for', 'details');

    const detailsInput = document.createElement('textarea');
    detailsInput.setAttribute('name', 'details');
    detailsInput.setAttribute('rows', 10);
    detailsInput.setAttribute('cols', 30);
    detailsInput.setAttribute('placeholder', 'Task details...');


    const projectsWrapper = document.createElement('p');
    const projectsLabel = document.createElement('label');
    projectsLabel.setAttribute('for', 'projects');
    projectsLabel.textContent = 'Projects';

    const projectsSelector = document.createElement('select');
    projectsSelector.setAttribute('id', 'projects');
    projectsSelector.setAttribute('name', 'projects');

    //TODO Loop through projects and create selector option for each type.
    //TODO First figure out what data needs to be passed, how the data is stored array, object etc.

    titleLabel.appendChild(titleInput);
    titleWrapper.appendChild(titleLabel);

    prioritySelector.appendChild(priorityOption1);
    prioritySelector.appendChild(priorityOption2);
    prioritySelector.appendChild(priorityOption3);
    priorityLabel.appendChild(prioritySelector);
    priorityWrapper.appendChild(priorityLabel);

    detailsLabel.appendChild(detailsInput);
    detailsWrapper.appendChild(detailsLabel);

    fieldset.append(legend);
    fieldset.appendChild(titleWrapper);
    fieldset.appendChild(priorityWrapper);
    fieldset.appendChild(detailsWrapper);
    fieldset.appendChild(projectsWrapper);

    form.appendChild(fieldset);
    root.appendChild(form);
}

export {newTaskForm}
