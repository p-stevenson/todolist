export function createElement(element, attributes = {}, children = []) {
    const el = document.createElement(element);
    Object.entries(attributes).forEach(([key, value]) => {
        el.setAttribute(key, value);
    });
    children.forEach(child => (typeof child === 'string')
    ? el.appendChild(document.createTextNode(child))
    : el.appendChild(child));
    return el
}

export const createListItem = (currentTask) => {
    const listItem = createElement('li', {
        'id': currentTask['id'], 
        'data-type': currentTask['type'],
        'data-description': currentTask['description'], 
        'data-priority': currentTask['priority'], 
        'data-project': currentTask['project']}, [`Task: ${currentTask['title']}`]);
    const taskNotes = createElement('p', {}, [`Notes: ${currentTask['notes']}`]);
    const taskDescription = createElement('p', {}, [`Description: ${currentTask['description']}`]);
    const deleteButton = createElement('button', {'id': `delete-${currentTask['id']}`, 'class': 'deleteButton'}, ['del']); 
    const editButton = createElement('button', {'id': `edit-${currentTask['id']}`, 'class': 'editButton'}, ['edit']);
    const projectName = createElement('p', {}, [`Project: ${currentTask['project']}`]);
    listItem.appendChild(taskDescription);
    listItem.appendChild(taskNotes);
    listItem.appendChild(projectName);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    return listItem;
}