export class Task {
    id: number;
    createdDate: string;
    modifiedDate: string;

    constructor(public name: string,
        public description: string,
        public dueDate: Date) {
            this.createdDate = new Date().toLocaleString();
        }
}
