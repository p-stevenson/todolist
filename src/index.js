import {Model} from './model.js';
import {View} from './view.js';
import {Controller} from './controller.js';
import './style.css';

const app = new Controller(new View(), new Model());

app.model.addTask('todo', 'first task', 'some text');
app.model.addTask('todo', 'second task', 'some more text');
app.model.addTask('todo', 'third task', 'even more text');

app.init();

app.view.newTaskForm();
app.view.editTaskForm();