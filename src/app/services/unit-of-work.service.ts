import { IUnitOfWork } from './../shared/repository-pattern';
import { Injectable } from '@angular/core';

import { JotBotLocalStorageDb } from './local-db-context.service';
import { QuickNoteRepository } from './../features/quicknotes/quick-notes.respository';

@Injectable()
export class LocalStorageUnitOfWork implements IUnitOfWork {
    context: JotBotLocalStorageDb;
    public quicknotes: QuickNoteRepository;

    constructor(context: JotBotLocalStorageDb) {
        this.context = context;
        this.init();
    }

    init(): void {
        this.quicknotes = new QuickNoteRepository(this.context, 'quicknotes');
    }
}
