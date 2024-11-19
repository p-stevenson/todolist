const root = document.getElementById('root');

const newTaskForm = (storedTaskData) => {
    const form = document.createElement('form');
    form.setAttribute('id', 'newTaskForm');
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    storedTaskData ? legend.textContent = 'Edit Task' : legend.textContent = 'New Task';

    const titleWrapper = document.createElement('p');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('placeholder', 'Task');
    storedTaskData ? titleInput.value = storedTaskData['title'] : '';


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

    if (storedTaskData) {
        switch (storedTaskData['priority']) {
            case 'high':
                priorityOption3.setAttribute('selected', 'selected');
                break;
            case 'medium':
                priorityOption2.setAttribute('selected', 'selected');
                break;
            default:
                priorityOption1.setAttribute('selected', 'selected');
        }
    }

    const detailsWrapper = document.createElement('p');
    const detailsLabel = document.createElement('label');
    detailsLabel.setAttribute('for', 'details');

    const detailsInput = document.createElement('textarea');
    detailsInput.setAttribute('id', 'details');
    detailsInput.setAttribute('name', 'details');
    detailsInput.setAttribute('rows', 10);
    detailsInput.setAttribute('cols', 30);
    detailsInput.setAttribute('placeholder', 'Task details...');
    storedTaskData ? detailsInput.value = storedTaskData['details'] : '';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'SUBMIT';

    titleLabel.appendChild(titleInput);
    titleWrapper.appendChild(titleLabel);

    prioritySelector.appendChild(priorityOption1);
    prioritySelector.appendChild(priorityOption2);
    prioritySelector.appendChild(priorityOption3);
    priorityWrapper.appendChild(priorityLabel);
    priorityWrapper.appendChild(prioritySelector);

    detailsLabel.appendChild(detailsInput);
    detailsWrapper.appendChild(detailsLabel);

    fieldset.append(legend);
    fieldset.appendChild(titleWrapper);
    fieldset.appendChild(priorityWrapper);
    fieldset.appendChild(detailsWrapper);
    fieldset.appendChild(submitButton);

    form.appendChild(fieldset);
    root.appendChild(form);
}

export {newTaskForm}
