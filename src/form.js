const root = document.getElementById('root');
const createElement = (tag, attributes = {}, textContent = '') => {
    const element = document.createElement(tag);
    for (let [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }
    element.textContent = textContent;
    return element
};
const newTaskForm = (storedTaskData) => {
    // ----- FORM CREATION ---- //
    const form = createElement('form', {id: 'newTaskForm'});
    const fieldset = createElement('fieldset');
    const legendText = storedTaskData ? 'Edit Task' : 'New Task';
    const legend = createElement('legend', {}, legendText);

    // ----- TITLE INPUT ----- //
    const titleWrapper = document.createElement('p');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    const titleInput = createElement('input', {
        type: 'text',
        name: 'title',
        id: 'title',
        placeholder: 'Task',
        value: storedTaskData ? storedTaskData['title'] : '',
    });

    // ----- PRIORITY SELECT ----- //
    const priorityWrapper = document.createElement('p');

    const priorityLabel = createElement('label', {
        for: 'priority'
    }, 'Priority');

    const prioritySelector = createElement('select', {
        name: 'priority',
        id: 'priority',
    });
    // ----- options -----
    const priorityOption1 = document.createElement('option');
    priorityOption1.setAttribute('value', 'low');
    priorityOption1.textContent = 'low';
    const priorityOption2 = document.createElement('option');
    priorityOption2.setAttribute('value', 'medium');
    priorityOption2.textContent = 'medium';
    const priorityOption3 = document.createElement('option');
    priorityOption3.setAttribute('value', 'high');
    priorityOption3.textContent = 'high';

    //switch needed when editing task select correct priority
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

    // ----- DETAILS INPUT ----- //
    const detailsWrapper = document.createElement('p');
    const detailsLabel = document.createElement('label');
    detailsLabel.setAttribute('for', 'details');
    const detailsInput = createElement('textarea', {
        id: 'details',
        name: 'details',
        rows: 10,
        cols: 30,
        placeholder: 'Task details...'
    }, storedTaskData ? storedTaskData['details'] : '',);

    // ----- SUBMIT BUTTON ----- //
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'SUBMIT';

    titleWrapper.append(titleLabel, titleInput);
    prioritySelector.append(priorityOption1, priorityOption2, priorityOption3);
    priorityWrapper.append(priorityLabel, prioritySelector);
    detailsWrapper.append(detailsLabel, detailsInput);
    fieldset.append(legend, titleWrapper, priorityWrapper, detailsWrapper, submitButton);
    form.append(fieldset);
    root.append(form);
}

export {newTaskForm}
