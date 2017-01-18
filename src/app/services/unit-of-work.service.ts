import { TaskRepository } from './../features/tasks/tasks.respository';
import { IUnitOfWork } from './../lib/repository-pattern';
import { Injectable } from '@angular/core';

import { JotBotLocalStorageDb } from './local-db-context.service';
import { QuickNoteRepository } from './../features/quicknotes/quick-notes.respository';

@Injectable()
export class LocalStorageUnitOfWork implements IUnitOfWork {
    context: JotBotLocalStorageDb;
    public quicknotes: QuickNoteRepository;
    public tasks: TaskRepository;

    constructor(context: JotBotLocalStorageDb) {
        this.context = context;
        this.init();
    }

    init(): void {
        this.quicknotes = new QuickNoteRepository(this.context, 'quicknotes');
        this.tasks = new TaskRepository(this.context, 'tasks');
    }
}
