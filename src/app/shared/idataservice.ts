
export interface IDataService {
    get(): any[];
    getItem(id: number): any;
    save(item: any): any;
    delete(id: number): void;
    // TODO: refactor as repository UoW to swap different data stores...
    // should have all tables listed here
    // each table implements ITable which has the crud methods
}
