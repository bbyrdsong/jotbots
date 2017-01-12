export class QuickNote {

    id: number;
    createdDate: string;
    modifiedDate: string;

    constructor(
        public name: string,
        public note: string
    ) {
        this.createdDate = new Date().toLocaleString();
    }
}
