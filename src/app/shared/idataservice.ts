
export interface IDataService {
    get(tableUrl: string): any[];
    getItem(tableUrl: string, id: number): any;
    save(tableUrl: string, item: any): any;
    delete(tableUrl: string, id: number): void;
}
