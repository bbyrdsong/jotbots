import { Injectable } from '@angular/core';
import { IDataService } from './../shared/idataservice';

@Injectable()
export class LocalDbService implements IDataService {
    private _db: any;

    constructor() {
        let jotbots = window.localStorage.getItem('jotbots');
        if (!jotbots) {
            window.localStorage.setItem('jotbots', JSON.stringify({ quicknotes: [], tasks: [], directory: [], notepad: [] }));
        }

        this._db = JSON.parse(window.localStorage.getItem('jotbots'));
    }

    private saveDbToStorage() {
        window.localStorage.setItem('jotbots', JSON.stringify(this._db));
    }

    get(tableUrl: string): any[] {
        return this._db[tableUrl];
    }

    getItem(tableUrl: string, id: number): any {
        return this._db[tableUrl].find(item => item.id === id);
    }

    save(tableUrl: string, item: any): any {
        let storedItem = this._db[tableUrl].find(i => i.id === item.id);

        if (storedItem) { // update
            for (let prop in item) {
                if (storedItem.hasOwnProperty(prop)) {
                    storedItem[prop] = item[prop];
                }
            }
            storedItem.modifiedDate = new Date().toLocaleString();
        } else {
            storedItem = item;
            storedItem.createdDate = new Date().toLocaleString();
            let maxItem = this._db[tableUrl].reduce((prev, curr) => {
                if (curr.id > prev.id) {
                    return curr;
                } else {
                    return prev;
                }
            });
            storedItem.id = maxItem ? maxItem.id + 1 : 1;
            this._db[tableUrl].push(storedItem);
        }

        this.saveDbToStorage();

        return storedItem;
    }

    delete(tableUrl: string, id: number): void {
        let storedItem = this._db[tableUrl].find(i => i.id === id);
        let idx = this._db[tableUrl].findIndex(storedItem);
        this._db[tableUrl].splice(idx, 1);

        this.saveDbToStorage();
    }
}
