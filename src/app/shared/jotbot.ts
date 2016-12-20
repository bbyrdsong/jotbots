export class JotBot {
    id: number;
    name: string;
    createdDate: string;
    modifiedDate: string;

    constructor(id: number, name: string) {
        this.name = name;
        this.id = id;
        this.createdDate = new Date().toLocaleString();
    }
}