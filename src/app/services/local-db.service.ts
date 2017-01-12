import { QuickNote } from './../features/quicknotes/quick-note';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalDbService {
    private _db: any;
    private _tbl: string;

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

    setTable(tableUrl: string) {
        this._tbl = tableUrl;
    }

    get(): any[] {
        return this._db[this._tbl];
    }

    getItem(id: number): any {
        return this._db[this._tbl].find(item => item.id === id);
    }

    save(item: any): any {
        let storedItem = this._db[this._tbl].find(i => i.id === item.id);

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

            let maxItem = this._db[this._tbl].length > 0 ? this._db[this._tbl].reduce((prev, curr) => {
                if (curr.id > prev.id) {
                    return curr;
                } else {
                    return prev;
                }
            }) : { id: 0 };
            storedItem.id = maxItem.id + 1;
            this._db[this._tbl].push(storedItem);
        }

        this.saveDbToStorage();

        return storedItem;
    }

    delete(id: number): void {
        let idx = this._db[this._tbl].findIndex(note => note.id === id);
        this._db[this._tbl].splice(idx, 1);

        this.saveDbToStorage();
    }
}
