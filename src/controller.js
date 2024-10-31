export class Controller {
    constructor (view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.newTaskButton();
        this.view.createListContainer();
    }

    
}


