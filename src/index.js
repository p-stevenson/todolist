import {Controller} from './controller.js';
import './style.css';

const app = new Controller();

//TODO currently the form remains open and will continue to add tasks
//when the NEW TASK button is pressed again more forms are created but
//tasks are no longer submitted correctly and the page is cleared when SUBMIT is pressed