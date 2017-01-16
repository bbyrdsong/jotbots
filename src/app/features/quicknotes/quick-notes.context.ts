import { Injectable } from '@angular/core';
import { IContext } from './../../shared/repository-pattern';
import { QuickNote } from './quick-note';

@Injectable()
export class QuickNotesContext implements IContext<QuickNote> {
    private db: any;
    private tableName: string = 'quicknotes';

    constructor() {
        this.init();
    }

    init(): void {
        let jotbots = window.localStorage.getItem('jotbots');
        if (!jotbots) {
            window.localStorage.setItem('jotbots', JSON.stringify({}));
        }

        this.db = JSON.parse(window.localStorage.getItem('jotbots'));

        if (!this.db.hasOwnProperty(this.tableName)) {
            this.db[this.tableName] = [];
        }
    }

    set(): QuickNote[] {
        return this.db[this.tableName];
    }

    saveChanges(): void {
        window.localStorage.setItem('jotbots', JSON.stringify(this.db));
    }
}
