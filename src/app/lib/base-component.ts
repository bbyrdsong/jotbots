import { OnInit } from '@angular/core';
import { JotBot } from './jotbot';
import { IUnitOfWork } from './repository-pattern';
import { FormGroup } from '@angular/forms';

export class BaseComponent<T extends any> implements OnInit {
    uow: IUnitOfWork;
    tableName: string;
    sectionTitle: string;
    dbSet: any[];
    model: any;
    showForm: boolean = false;

    constructor(uow: IUnitOfWork, tableName: string, sectionTitle) {
        this.uow = uow;
        this.tableName = tableName;
        this.sectionTitle = sectionTitle;
    }

    ngOnInit() {
        this.model = {};
        this.get();
    }

    get(): void {
        this.dbSet = this.uow[this.tableName].getAll();
    }

    save(form: FormGroup, event: Event): void {
        if (event) {
            event.preventDefault();
        }

        if (this.model.id) {
            this.uow[this.tableName].update(this.model);
        } else {
            this.uow[this.tableName].insert(this.model);
        }

        this.get();
        this.showForm = false;
    }

    add(): void {
        this.model = {};
        this.showForm = true;
    }

    edit(model: T, event: Event): void {
        if (event) {
            event.preventDefault();
        }
        this.model = model;
        this.showForm = true;
    }

    delete(model: T, event: Event): void {
        if (event) {
            event.preventDefault();
        }

        this.uow[this.tableName].delete(model.id);
        this.get();
    }
}
