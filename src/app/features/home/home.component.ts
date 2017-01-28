import { LocalStorageUnitOfWork } from './../../services/unit-of-work.service';
import { IUnitOfWork } from './../../lib/repository-pattern';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <h1>{{sectionTitle}}</h1>
        <div>
            <h3><a routerLink="/tasks">Tasks</a></h3>
            <p>Schedule tasks for eventful reminders!!</p>
            <p>task count: {{uow.tasks.dbSet.length}}</p>
        </div>
        <div>
            <h3><a routerLink="/quicknotes">Quick Notes</a></h3>
            <p>Web sticky notes of stuff!!</p>
            <p>note count: {{uow.quicknotes.dbSet.length}}</p>
        </div>
        <div>
            <h3><a routerLink="/directory">Directory</a></h3>
            <p>Keep in touch with important people!!</p>
            <p>directory count: {{uow.directory.dbSet.length}}</p>
        </div>
        <div>
            <h3><a routerLink="/notepad">Notepad</a></h3>
            <p>Web text files!!</p>
            <p>document count: {{uow.notepad.dbSet.length}}</p>
        </div>
    `
})
export class HomeComponent extends OnInit {
    sectionTitle: string;
    uow: IUnitOfWork;

    constructor(uow: LocalStorageUnitOfWork) {
        super();
        this.uow = uow;
    }

    ngOnInit() {
        this.sectionTitle = 'Jot Bots';
    }
}
