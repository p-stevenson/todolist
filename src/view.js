export class View {
    constructor() {
        this.root = document.getElementById('root');
    }

    createList(listName = 'default') {
        let container = document.createElement('div');
        container.setAttribute('class', 'listContainer')
        let list = document.createElement('ol');
        list.setAttribute('id', listName);
        container.appendChild(list);
        this.root.appendChild(container);
    }
}

