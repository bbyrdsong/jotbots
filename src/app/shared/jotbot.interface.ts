export interface IJotBot {
    sectionTitle: string;

    getData(): any[];
    saveRecord(model: any): void;
}