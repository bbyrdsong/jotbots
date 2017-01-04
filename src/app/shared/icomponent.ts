export interface IComponent {
    sectionTitle: string;
    jbModel: any;

    getData(): any[];
    saveRecord(model: any): void;
    newRecord(): void;
}
