export default class Task {
    #uuid = crypto.randomUUID();
    title = '';

    constructor(type) {
        this.type = type;
    }
    get uuid() {
        console.log(this.#uuid);
    }

    updateTitle(title) {
        this.title = title;
    }

}
