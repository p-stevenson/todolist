export const listItemBuilder = (currentTask) => {
    const listItem = createListItem(currentTask);
    const taskDetails = addTaskDetails(currentTask);
    const deleteButton = addDeleteButton(currentTask);
    const editButton = addEditButton(currentTask);
    listItem.appendChild(taskDetails);
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    return listItem;
}

const createListItem = (currentTask) => {
    const listItem = document.createElement("li");
    listItem.setAttribute('id', currentTask['id']);
    listItem.setAttribute('data-type', currentTask['type']);
    listItem.setAttribute('data-priority', currentTask['priority']);
    listItem.setAttribute('data-project', currentTask['project']);
    listItem.textContent = currentTask['title'];
    return listItem;
}

const addTaskDetails = (currentTask) => {
    const taskDetails = document.createElement('p');
    taskDetails.textContent = `Details: ${currentTask['details']}`;
    return taskDetails;
}

const addDeleteButton = (currentTask) => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', `delete-${currentTask['id']}`);
    deleteButton.setAttribute('class', 'deleteButton');
    deleteButton.textContent = 'del';
    return deleteButton;
}

const addEditButton = (currentTask) => {
    const editButton = document.createElement('button');
    editButton.setAttribute('id', `edit-${currentTask['id']}`);
    editButton.setAttribute('class', 'editButton');
    editButton.textContent = 'edit';
    return editButton;
}

