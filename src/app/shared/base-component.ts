import { OnInit } from '@angular/core';
import { JotBot } from './jotbot';
import { IUnitOfWork } from './repository-pattern';
import { FormGroup } from '@angular/forms';

export class BaseComponent<T extends JotBot> implements OnInit {
    uow: IUnitOfWork;
    tableName: string;
    sectionTitle: string;
    dbSet: T[];
    model: T;
    showForm: boolean = false;

    constructor(uow: IUnitOfWork, tableName: string, sectionTitle) {
        this.uow = uow;
        this.tableName = tableName;
        this.sectionTitle = sectionTitle;
    }

    ngOnInit() {
        this.get();
    }

    get(): void {
        this.dbSet = this.uow[this.tableName].getAll();
    }

    save(form: FormGroup, event: Event): void {
        event.preventDefault();
        let jotbot = form.value;

        if (this.model.id > 0) {
            this.uow[this.tableName].update(this.model);
        } else {
            this.uow[this.tableName].insert(this.model);
        }

        this.get();
        this.showForm = false;
    }

    add(): void {
        this.model = new JotBot('', '') as T;
        this.showForm = true;
    }

    edit(model: T, event: Event): void {
        event.preventDefault();
        this.model = model;
        this.showForm = true;
    }

    delete(model: T, event: Event): void {
        event.preventDefault();
        this.uow[this.tableName].delete(model.id);
        this.get();
    }
}
