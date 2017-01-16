import { Injectable } from '@angular/core';
import { IContext, BaseModel } from './../shared/repository-pattern';

@Injectable()
export class JotBotLocalStorageDb {
    private db: any;

    constructor(private tableName: string) {
        let jotbots = window.localStorage.getItem('jotbots');
        if (!jotbots) {
            window.localStorage.setItem('jotbots', JSON.stringify({ tableName: [] }));
        }

        this.db = JSON.parse(window.localStorage.getItem('jotbots'));
    }
}
