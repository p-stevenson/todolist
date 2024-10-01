const storage = [];
export class Task {
    uuid = crypto.randomUUID();
    title = '';
    details = '';
    status = 'open';

    constructor(type) {
        this.type = type;
    }
}

export {storage};