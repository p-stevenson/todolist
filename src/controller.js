import Task from './model.js'

function taskCreate(type,...args) {
    return new Task(type);

}

const firstTask = taskCreate('todo');

console.log(firstTask.uuid);

