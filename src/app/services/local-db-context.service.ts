import { Injectable } from '@angular/core';
import { IContext } from './../lib/repository-pattern';

@Injectable()
export class JotBotLocalStorageDb implements IContext {
    private db: any;

    constructor() {
        let jotbots = window.localStorage.getItem('jotbots');
        if (!jotbots) {
            window.localStorage.setItem('jotbots', JSON.stringify({}));
        }

        this.db = JSON.parse(window.localStorage.getItem('jotbots'));
    }

    set(tableName: string): any[] {
        if (!this.db.hasOwnProperty(tableName)) {
            this.db[tableName] = [];
        }

        return this.db[tableName];
    }

    saveChanges(): void {
        window.localStorage.setItem('jotbots', JSON.stringify(this.db));
    }
}
